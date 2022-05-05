let { readFile, writeFile, readdir, rm, mkdir } = require('fs/promises');
let path = require('path');
let { spawn } = require('child_process');
let csstree = require('css-tree');

let appPath = path.join(__dirname, '../app');
let routesPath = path.join(appPath, 'routes');
let stylesPath = path.join(appPath, 'styles');
let stylesRoutesPath = path.join(stylesPath, 'routes');

let baseTailwindCss = path.join(stylesPath, 'tailwind/base.css');
let routeTailwindCss = path.join(stylesPath, 'tailwind/route.css');

let root = path.join(appPath, 'root.{js,jsx,ts,tsx}');

call();

async function call() {
  let t0 = performance.now();
  dumpCssFiles();

  let [rootAst, routeAstMap] = await Promise.all([
    generateTailwindAst(
      baseTailwindCss,
      `${root},${appPath}/components/**/*.{js,jsx,ts,tsx}`
    ),
    generateAllTailwindAsts(),
  ]);

  let rootClassNames = getClassNames(rootAst);

  // kick of the root stylesheet writing
  let fileWritingPromises = [];
  let rootStylesheet = csstree.generate(rootAst);
  let rootPromise = writeFile(
    path.join(stylesPath, 'root.css'),
    rootStylesheet
  );
  fileWritingPromises.push(rootPromise);

  // Create all the directories we might need
  let directoryPromise = [];
  let directories = new Set();
  for (let pathname of routeAstMap.keys()) {
    let directory = path.dirname(getCssPathname(pathname));
    if (directories.has(directory)) continue;

    directoryPromise.push(mkdir(directory, { recursive: true }));
    directories.add(directory);
  }

  try {
    await Promise.all(directoryPromise);
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }

  // map overall of the route stylesheets purging
  for (let pathname of routeAstMap.keys()) {
    let ancestorPathnames = getAncestorPathnames(pathname);
    let ancestorClassNames = rootClassNames;

    for (let ancestorPathname of ancestorPathnames) {
      // skip ancestorPathnames that don't exist
      if (!routeAstMap.has(ancestorPathname)) continue;
      let { classnames } = routeAstMap.get(ancestorPathname);
      ancestorClassNames = new Set([...rootClassNames, ...classnames]);
    }

    let { ast } = routeAstMap.get(pathname);
    let stylesheetText = generatePurgedStylesheet(ast, ancestorClassNames);

    let promise = writeFile(getCssPathname(pathname), stylesheetText);
    fileWritingPromises.push(promise);
  }

  await Promise.all([...directoryPromise, ...fileWritingPromises]);

  console.log();
  console.log(
    `All css has been successfully generated in ${performance.now() - t0}ms`
  );
  console.log();
}

/**
 * Generates and loops over a list of file paths and generates the tailwind styles for each file,
 * returning an AST of the styles in a Map keyed by the route path
 * Note: The pathname keys have their extension stripped
 * @returns {Promise<Map<string, {ast: csstree.CssNode, classnames: Set<string>}>>} Map of file path to AST and set of classnames
 */
async function generateAllTailwindAsts() {
  let filePaths = await getAllFilePaths();

  let entryPromises = filePaths.map(async (pathname) => {
    // drop the extension for the route path—this helps with matching parent directories later
    let extensionRegex = new RegExp(`${path.extname(pathname)}$`);
    let extensionlessPathname = pathname.replace(extensionRegex, '');
    let ast = await generateTailwindAst(routeTailwindCss, pathname);
    let entry = [
      extensionlessPathname,
      { ast, classnames: getClassNames(ast) },
    ];
    return entry;
  });

  let entries = await Promise.all(entryPromises);
  return new Map(entries);
}

/**
 * Walk the AST of a css file and remove classNames that appear in the ancestors
 * @param {csstree.CssNode} ast
 * @param {Set<string>} ancestorClassNames
 * @returns {string} The purged css
 */
function generatePurgedStylesheet(ast, ancestorClassNames) {
  csstree.clone(ast);
  // remove all classes that exist in the ancestor classNames
  csstree.walk(ast, {
    visit: 'Rule', // this option is good for performance since reduces walking path length
    enter: function (node, item, list) {
      // since `visit` option is used, handler will be invoked for node.type === 'Rule' only
      if (selectorHasClassName(node.prelude, ancestorClassNames)) {
        list.remove(item);
      }
    },
  });

  return csstree.generate(ast);
}

/**
 * Check if a selector has a className that exists in the ancestorClassNames
 * @param {csstree.Raw | csstree.SelectorList} selector
 * @param {Set<string>} classNames Set of the classnames to check
 * @returns {boolean}
 */
function selectorHasClassName(selector, classNames) {
  return csstree.find(
    selector,
    (node) => node.type === 'ClassSelector' && classNames.has(node.name)
  );
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

// #region UTILS

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
  // remove everything up to './routes/' to only capture the pathnames we care about
  let relativePath = pathname.replace(`${routesPath}/`, '');
  return path.join(stylesRoutesPath, `${relativePath}.css`);
}

/**
 * Recursively remove all the generated .css files to ensure we're starting fresh
 */
async function dumpCssFiles() {
  try {
    await Promise.all([
      rm(path.join(stylesPath, 'root.css')),
      rm(stylesRoutesPath, { recursive: true }),
    ]);
  } catch (error) {
    // if the directory doesn't exist just keep going
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }
}

// #endregion
