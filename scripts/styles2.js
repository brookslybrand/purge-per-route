let { readFile, writeFile, readdir, rm } = require('fs/promises');
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
let application = path.join(routesPath, 'application.{js,jsx,ts,tsx}');
let applicationPagination = path.join(
  routesPath,
  'application/pagination.{js,jsx,ts,tsx}'
);

call();

async function call() {
  let t0 = performance.now();
  let [rootAst, routeAstMap] = await Promise.all([
    generateTailwindAst(
      baseTailwindCss,
      `${root},${appPath}/components/**/*.{js,jsx,ts,tsx}`
    ),
    generateAllTailwindAsts(),
  ]);
  console.log(`Time to generate all tailwind ASTs: ${performance.now() - t0}`);

  // console.log(asts);
  // let [rootStylesAst, applicationStylesAst, applicationPaginationStylesAst] =
  //   await Promise.all([
  //     generateTailwindAst(
  //       baseTailwindCss,
  //       `${root},${appPath}/components/**/*.{js,jsx,ts,tsx}`
  //     ),
  //     generateTailwindAst(routeTailwindCss, application),
  //     generateTailwindAst(routeTailwindCss, applicationPagination),
  //   ]);

  // let rootClassNames = getClassNames(rootStylesAst);
  // let applicationClassNames = getClassNames(applicationStylesAst);

  // console.log({
  //   rootSize: rootClassNames.size,
  //   applicationSize: applicationClassNames.size,
  //   applicationPaginationSize: getClassNames(applicationPaginationStylesAst)
  //     .size,
  // });

  // let ancestorClassNames = new Set([
  //   ...rootClassNames,
  //   ...applicationClassNames,
  // ]);

  // let rootStylesheet = csstree.generate(rootStylesAst);
  // let stylesheetText = generatePurgedStylesheet(
  //   applicationPaginationStylesAst,
  //   ancestorClassNames
  // );

  // await writeFile(path.join(stylesPath, 'root.css'), rootStylesheet);
  // await writeFile(
  //   path.join(stylesRoutesPath, 'application', 'pagination.css'),
  //   stylesheetText
  // );
}

/**
 * Recursively walks the tree of routes, generating the tailwind styles for each route and returning
 * an AST of the styles in a Map keyed by the route path
 * @param {string} directoryPath Path of the directory with files to generate ASTs and recursively walk
 * child directories
 * @returns {Promise<Map<string, csstree.CssNode>>} Map of route path to AST of styles
 */
async function generateAllTailwindAsts(directoryPath = routesPath) {
  let directoryPromises = [];

  /**
   * @type {Map<string, csstree.CssNode>}
   */
  let astPromiseMap = new Map();

  let files = await readdir(directoryPath, { withFileTypes: true });

  for (let file of files) {
    // Recursively walk children directories
    if (file.isDirectory()) {
      let childDirectory = `${directoryPath}/${file.name}`;
      let childDirectoryPromise = generateAllTailwindAsts(childDirectory);
      directoryPromises.push(childDirectoryPromise);
      continue;
    }

    // Create tailwind ASTs for files
    let filePathname = `${directoryPath}/${file.name}`;
    let astPromise = generateTailwindAst(routeTailwindCss, filePathname);
    astPromiseMap.set(filePathname, astPromise);
  }

  // Let the files and directories resolve
  let [values, directoryValues] = await Promise.all([
    Promise.all([...astPromiseMap.values()]),
    Promise.all(directoryPromises),
  ]);

  // Build up a new map from the files
  let pathnames = [...astPromiseMap.keys()];
  let finalMap = new Map();
  for (let i = 0; i < pathnames.length; i++) {
    finalMap.set(pathnames[i], values[i]);
  }

  // Add the ASTs for the directories to the map
  for (let astMap of directoryValues) {
    finalMap = new Map([...finalMap, ...astMap]);
  }

  return finalMap;
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

// #endregion
