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

let root = path.join(appPath, 'root.tsx');
let application = path.join(routesPath, 'application.tsx');
let applicationPagination = path.join(routesPath, 'application/pagination.tsx');

call();

async function call() {
  let [rootStylesAst, applicationStylesAst, applicationPaginationStylesAst] =
    await Promise.all([
      generateTailwindAst(
        baseTailwindCss,
        `${root},${appPath}/components/**/*.{js,jsx,ts,tsx}`
      ),
      generateTailwindAst(routeTailwindCss, application),
      generateTailwindAst(routeTailwindCss, applicationPagination),
    ]);

  let rootClassNames = getClassNames(rootStylesAst);
  let applicationClassNames = getClassNames(applicationStylesAst);

  let ancestorClassNames = new Set([
    ...rootClassNames,
    ...applicationClassNames,
  ]);

  let rootStylesheet = csstree.generate(rootStylesAst);
  let stylesheetText = generatePurgedStylesheet(
    applicationPaginationStylesAst,
    ancestorClassNames
  );

  await writeFile(path.join(stylesPath, 'root.css'), rootStylesheet);
  await writeFile(
    path.join(stylesRoutesPath, 'application', 'pagination.css'),
    stylesheetText
  );
}

/**
 * Walk the AST of a css file and remove classNames that appear in the ancestors
 * @param {csstree.CssNode} ast
 * @param {Set<string>} ancestorClassNames
 * @returns {string} The purged css
 */
function generatePurgedStylesheet(ast, ancestorClassNames) {
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
 * Runs tailwindcss CLI for a specific file
 * @param {string} inputStylePathname
 * @param {string} contentPathname
 * @returns
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

//#region UTILS

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

//#endregion
