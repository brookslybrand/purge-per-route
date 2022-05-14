let { writeFile, readdir, rm, mkdir } = require('fs/promises');
let path = require('path');
let { spawn } = require('child_process');
let csstree = require('css-tree');
let chokidar = require('chokidar');
const { performance } = require('perf_hooks');

let appPath = path.join(__dirname, '../app');
let routesPath = path.join(appPath, 'routes');
let stylesPath = path.join(appPath, 'styles');
let stylesRoutesPath = path.join(stylesPath, 'routes');

let baseTailwindCss = path.join(stylesPath, 'tailwind/base.css');
let routeTailwindCss = path.join(stylesPath, 'tailwind/route.css');

let root = path.join(appPath, 'root.{js,jsx,ts,tsx}');
let rootStylesPath = path.join(stylesPath, 'root.css');

createStyles();

// Main function to generate the stylesheets
async function createStyles() {
  let isProd = process.env.NODE_ENV === 'production';
  let t0 = performance.now();
  // Dump all the files and start with a clean slate for production
  // This would be bad in development, lots of dev server crashing 😬
  if (isProd) {
    dumpCssFiles();
  }

  // Start creating the root tailwind styles
  let rootAstPromise = generateAndSaveRootTailwindStyles();
  // Generate all ASTs—we must wait until this process is done to proceed
  let routeAstMap = await generateRouteTailwindAstMap();

  // Make all the directories we will need, as well as resolve and pull out the root AST
  let [rootAst] = await Promise.all([
    rootAstPromise,
    makeDirectories(routeAstMap.keys()),
  ]);

  // Maybe should check if in Dev specifically, but for now this is fine
  if (!isProd) {
    setupWatcher(rootAst, routeAstMap);
  }

  // Create all of the route stylesheets
  await generateAndSaveRouteTailwindStyles(routeAstMap, rootAst.classNames);

  console.log();
  if (isProd) {
    console.log(
      `All css has been successfully generated in ${millisecondsFromTimestamp(
        t0
      )}ms`
    );
  } else {
    console.log(
      `Initially css generated in ${millisecondsFromTimestamp(t0)}ms`
    );
    console.log('Watching for updates...');
  }
  console.log();
}

// #region Watcher logic for dev mode
/**
 * Sets up a watcher to regenerate the stylesheets when appropriate files change
 * @param {{ast: csstree.CssNode; classNames: Set<string>;} rootAst
 * @param {Map<string, {ast: csstree.CssNode; classNames: Set<string>;}>} routeAstMap
 */
function setupWatcher(rootAst, routeAstMap) {
  let rootWatcher = chokidar.watch(
    // `${root},${appPath}/components/**/*.{js,jsx,ts,tsx}`,
    [root, `${appPath}/components/**/*.{js,jsx,ts,tsx}`],
    {
      persistent: true,
      ignoreInitial: true,
    }
  );

  rootWatcher.on('all', () =>
    logStyleUpdate('update', async () => {
      let newRootAst = await generateAndSaveRootTailwindStyles();
      // Check if the styles have actually changed, otherwise we can bail
      let hasSameClassnames = areSetsEqual(
        rootAst.classNames,
        newRootAst.classNames
      );
      if (hasSameClassnames) return;
      // Update the reference for the other watcher to use and regenerate all styles
      // since root is the ancestor of everything
      rootAst = newRootAst;
      await generateAndSaveRouteTailwindStyles(routeAstMap, rootAst.classNames);
      return rootStylesPath;
    })
  );

  // Not sure if we need to ignore any files since everything in `/routes/` should be a route
  let routesWatcher = chokidar.watch(routesPath, {
    persistent: true,
    ignoreInitial: true,
  });

  // Setup a watcher to remove ASTs and files, create directories and add new ASTs, and update ASTs
  routesWatcher
    .on('unlink', (pathname) =>
      logStyleUpdate('remove', async () => {
        // Remove AST from map and remove the css file
        routeAstMap.delete(pathname);
        rm(getCssPathname(pathname));
        await generateAndSaveRouteTailwindStyles(
          routeAstMap,
          rootAst.classNames
        );
      })
    )
    .on('add', (pathname) => {
      logStyleUpdate('add', async () => {
        // Generate the new entry and create the necessary directory
        // (doesn't matter if directory exists)
        let [entry] = await Promise.all([
          generateRouteTailwindAstEntry(pathname),
          makeDirectories([pathname]),
        ]);
        routeAstMap.set(entry[0], entry[1]);
        await generateAndSaveRouteTailwindStyles(
          routeAstMap,
          rootAst.classNames
        );
        return getCssPathname(entry[0]);
      });
    })
    .on('change', (pathname) => {
      logStyleUpdate('update', async () => {
        let [extensionlessPathname, astObject] =
          await generateRouteTailwindAstEntry(pathname);
        // Check if the styles have actually changed, otherwise we can bail
        let hasSameClassnames = areSetsEqual(
          routeAstMap.get(extensionlessPathname).classNames,
          astObject.classNames
        );
        if (hasSameClassnames) return;
        // Update the AST map and save the styles
        routeAstMap.set(extensionlessPathname, astObject);
        await generateAndSaveRouteTailwindStyles(
          routeAstMap,
          rootAst.classNames,
          new Set([extensionlessPathname])
        );
        return getCssPathname(extensionlessPathname);
      });
      // Generate the AST
    })
    // Don't know if better error handling is needed
    .on('error', (error) => console.error(`Watcher error: ${error}`));
}

/**
 * @param {'add' | 'update' | 'remove'} action
 * @param {() => Promise<string | undefined>} cb
 */
async function logStyleUpdate(action, cb) {
  let t0 = performance.now();
  let pathname = await cb();
  if (pathname) {
    let displayAction =
      action === 'add' ? 'Added' : action === 'update' ? 'Updated' : 'Removed';
    let displayPathname = `app${pathname.replace(appPath, '')}`;
    console.log();
    console.log(
      `${displayAction} ${displayPathname} styles and purged relevant stylesheets in ${millisecondsFromTimestamp(
        t0
      )}ms`
    );
    console.log();
  }
}

// #endregion

// #region Functions to generate ASTs of tailwindcss styles and and ultimately export stylesheets

/**
 * Generates an AST of and creates a file for the root/global styles
 * @param {string} contentPathname
 * @returns {Promise<{ast: csstree.CssNode; classNames: Set<string>;}>} AST and Set of classNames
 */
async function generateAndSaveRootTailwindStyles(
  contentPathname = `${root},${appPath}/components/**/*.{js,jsx,ts,tsx}`
) {
  let rootAst = await generateTailwindAst(baseTailwindCss, contentPathname);

  // Kick of the root stylesheet writing
  // This may be a bad idea to delay the return of classNames until this is
  // finished, however I believe this will pretty much always be done before
  // the rest of the ASTs are generated
  let rootStylesheet = csstree.generate(rootAst);
  await writeFile(rootStylesPath, rootStylesheet);

  return {
    ast: rootAst,
    classNames: getClassNames(rootAst),
  };
}

/**
 *
 * @param {Map<string, {ast: csstree.CssNode; classNames: Set<string>;}>} routeAstMap
 * @param {Set<string>} rootClassNames
 * @param {null | Set<string>} dirtyPathnames If null, all paths are dirty, otherwise only update anything relying on the dirty path
 * @returns
 */
async function generateAndSaveRouteTailwindStyles(
  routeAstMap,
  rootClassNames,
  dirtyPathnames = null
) {
  let fileWritingPromises = [];
  // Map over all of the route stylesheets, create a set of ancestor classNames, purge the stylesheet, and write it
  for (let pathname of routeAstMap.keys()) {
    let shouldUpdate = dirtyPathnames === null; // if null, all paths are dirty, so definitely update
    let ancestorPathnames = getAncestorPathnames(pathname);
    // Every route has root as the ancestor
    let ancestorClassNames = rootClassNames;

    shouldUpdate = shouldUpdate || dirtyPathnames.has(pathname);

    for (let ancestorPathname of ancestorPathnames) {
      // Skip ancestorPathnames that don't exist
      if (!routeAstMap.has(ancestorPathname)) continue;
      let { classNames } = routeAstMap.get(ancestorPathname);
      ancestorClassNames = new Set([...rootClassNames, ...classNames]);
      shouldUpdate = shouldUpdate || dirtyPathnames.has(ancestorPathname);
    }

    // Skip routes we're not updating
    if (!shouldUpdate) continue;

    let { ast } = routeAstMap.get(pathname);
    let stylesheetText = generatePurgedStylesheet(ast, ancestorClassNames);

    let promise = writeFile(getCssPathname(pathname), stylesheetText);
    fileWritingPromises.push(promise);
  }

  return Promise.all(fileWritingPromises);
}

/**
 * Generates and loops over a list of file paths and generates the tailwind styles for each file,
 * returning an AST of the styles in a Map keyed by the route path
 * Note: The pathname keys have their extension stripped
 * @returns {Promise<Map<string, {ast: csstree.CssNode, classNames: Set<string>}>>} Map of file path to AST and Set of classNames
 */
async function generateRouteTailwindAstMap() {
  let filePaths = await getAllFilePaths();
  let entryPromises = filePaths.map((pathname) =>
    generateRouteTailwindAstEntry(pathname)
  );
  let entries = await Promise.all(entryPromises);
  return new Map(entries);
}

/**
 * Create a single entry for the map of route pathnames to AST/className
 * @param {string} pathname
 * @returns {Promise<[string, {ast: csstree.CssNode; classNames: Set<string>;}]>}
 */
async function generateRouteTailwindAstEntry(pathname) {
  // drop the extension for the route path—this helps with matching parent directories later
  let extensionRegex = new RegExp(`${path.extname(pathname)}$`);
  let extensionlessPathname = pathname.replace(extensionRegex, '');
  let ast = await generateTailwindAst(routeTailwindCss, pathname);
  let classNames = getClassNames(ast);
  let entry = [extensionlessPathname, { ast, classNames }];
  return entry;
}

/**
 * Runs the tailwindcss CLI for a specific file then parses and returns an AST of the styles
 * @param {string} inputStylePathname
 * @param {string} contentPathname
 * @returns {Promise<csstree.CssNode>} AST of tailwindcss styles for contentPathname
 */
async function generateTailwindAst(inputStylePathname, contentPathname) {
  let twProcess = spawn(
    'tailwindcss',
    ['-i', inputStylePathname, `--content=${contentPathname}`],
    { shell: true }
  );
  let output = await promisifyTailwindProcess(twProcess);
  return csstree.parse(output);
}

/**
 * Walk the AST of a css file and remove classNames that appear in the ancestors
 * @param {csstree.CssNode} ast
 * @param {Set<string>} ancestorClassNames
 * @returns {string} The purged css
 */
function generatePurgedStylesheet(ast, ancestorClassNames) {
  let cloneAst = csstree.clone(ast);
  // remove all classes that exist in the ancestor classNames
  csstree.walk(cloneAst, {
    visit: 'Rule', // this option is good for performance since reduces walking path length
    enter: function (node, item, list) {
      // since `visit` option is used, handler will be invoked for node.type === 'Rule' only
      if (selectorHasClassName(node.prelude, ancestorClassNames)) {
        list.remove(item);
      }
    },
  });

  return csstree.generate(cloneAst);
}

// #endregion

// #region Various utilities used throughout

/**
 * Recursively remove all the generated .css files to ensure we're starting fresh
 */
async function dumpCssFiles() {
  try {
    await Promise.all([
      rm(rootStylesPath),
      rm(stylesRoutesPath, { recursive: true }),
    ]);
  } catch (error) {
    // if the directory doesn't exist just keep going
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }
}

/**
 * Make all the styles directories we need
 * @param {string[] | IterableIterator<string>} pathnames
 */
async function makeDirectories(pathnames) {
  // Create all the directories we might need
  let directoryPromise = [];
  let directories = new Set();
  for (let pathname of pathnames) {
    let directory = path.dirname(getCssPathname(pathname));
    // skip directories we're already working on
    if (directories.has(directory)) continue;

    // Make the directory and keep track of the promise/update the set
    directoryPromise.push(mkdir(directory, { recursive: true }));
    directories.add(directory);
  }

  // Group all directory creation promises into a single promise
  try {
    await Promise.all(directoryPromise);
  } catch (error) {
    // ignore if the directory already exists—just keep trucking
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

/**
 * Walk the AST of a css file and return a Set of the classNames
 * @param {csstree.CssNode} ast
 * @returns {Set<string>}
 */
function getClassNames(ast) {
  let classNames = new Set();

  csstree.walk(ast, {
    visit: 'ClassSelector',
    enter: function (node) {
      classNames.add(node.name);
    },
  });

  return classNames;
}

/**
 * Check if a selector has a className that exists in the ancestorClassNames
 * @param {csstree.Raw | csstree.SelectorList} selector
 * @param {Set<string>} classNames Set of the classNames to check
 * @returns {boolean}
 */
function selectorHasClassName(selector, classNames) {
  return csstree.find(
    selector,
    (node) => node.type === 'ClassSelector' && classNames.has(node.name)
  );
}

/**
 * Turn a child processes resulting from calling `spawn` into promises
 * that resolves once the process closes
 * @param {import('child_process').ChildProcessWithoutNullStreams} twProcess
 * @returns
 */
function promisifyTailwindProcess(twProcess) {
  return new Promise((resolve, reject) => {
    let output = '';
    twProcess.stdout.on('data', (data) => {
      output += String(data);
    });

    twProcess.on('close', (code) => {
      resolve(output);
    });

    twProcess.on('error', (error) => {
      reject(error.message);
    });
  });
}

/**
 * Recursively walks a directory and returns a list of all the file pathnames
 * @param {string} directoryPath Path of the directory with files to generate ASTs and recursively walk
 * @returns {Promise<string[]>} List of file pathnames
 */
async function getAllFilePaths(directoryPath = routesPath) {
  let filePaths = [];
  let childrenDirectoryPromises = [];

  let files = await readdir(directoryPath, { withFileTypes: true });

  for (let file of files) {
    let pathname = `${directoryPath}/${file.name}`;
    // Add all files to the list of file names and recursively walk children directories
    if (!file.isDirectory()) {
      filePaths.push(pathname);
    } else {
      childrenDirectoryPromises.push(getAllFilePaths(pathname));
    }
  }

  // Add the child directory file names to the list of file names
  let childDirectoryFilePaths = await Promise.all(childrenDirectoryPromises);
  filePaths.push(...childDirectoryFilePaths.flat());

  return filePaths;
}

/**
 * Takes a pathname and returns the file pathname for each possible layout file.
 * Assumes the pathname does not have it's extension and returns parent pathnames without extensions
 * For more information on how Remix handles layout hierarchy, see https://remix.run/docs/en/v1/guides/routing#rendering-route-layout-hierarchies
 * @param {string} pathname
 * @returns {string[]} List of ancestor pathnames
 */
function getAncestorPathnames(pathname) {
  let ext = path.extname(pathname);
  if (ext !== '') {
    throw new Error(`Pathname should not have an extension: ${pathname}`);
  }

  // remove everything up to './routes/' to only capture the pathnames we care about
  let relativePath = pathname.replace(`${routesPath}/`, '');
  let segments = relativePath.split('/');
  segments.pop(); // remove the last segment since we only want ancestor pathnames

  return segments.map((s) => path.join(routesPath, s));
}

/**
 * Takes a pathname and returns the appropriate stylesheet (.css) file pathname
 * @param {string} pathname
 */
function getCssPathname(pathname) {
  // Remove everything up to './routes/' to only capture the pathnames we care about
  let relativePath = pathname.replace(`${routesPath}/`, '');
  // Ensure extension is removed—regex taken from https://stackoverflow.com/a/4250408
  let extensionlessPathname = relativePath.replace(/\.[^/.]+$/, '');
  return path.join(stylesRoutesPath, `${extensionlessPathname}.css`);
}

/**
 * Compares 2 sets to see if they contain the same elements
 * @param {Set<unknown>} set1
 * @param {Set<unknown>} set2
 * @returns {boolean} True if the sets contain the same elements
 */
function areSetsEqual(set1, set2) {
  if (set1.size !== set2.size) {
    return false;
  }
  for (let item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }
  return true;
}

/**
 * Returns a rounded difference between a timestamp and the current time
 * @param {*} t0 number
 */
function millisecondsFromTimestamp(t0) {
  return Math.round(performance.now() - t0);
}

// #endregion
