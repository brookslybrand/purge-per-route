let { readFile, writeFile, readdir, rm } = require('fs/promises');
let { PurgeCSS } = require('purgecss');

let path = require('path');
let { spawn } = require('child_process');
let { watchTree } = require('watch');

let appPath = path.join(__dirname, '../app');
let routesPath = path.join(appPath, 'routes');
let stylesPath = path.join(appPath, 'styles');
let stylesRoutesPath = path.join(stylesPath, 'routes');

/** This is where the magic happens */
generateStyles();
async function generateStyles() {
  // remove all the style files before building them from scratch
  if (process.env.NODE_ENV === 'production') {
    dumpCssFiles();
  }

  if (process.env.NODE_ENV === 'production') {
    let basePromise = promisifyChildProcess(spawnBaseStyles());
    let routesPromise = spawnFilesInDirectory();
    await Promise.all([basePromise, routesPromise]);
    await purgeFinalCss();
    console.log();
    console.log('all css has been successfully purged');
    console.log();
  } else {
    // TODO: optimize this development watching
    watchTree(routesPath, async (f, curr, prev) => {
      let basePromise = promisifyChildProcess(spawnBaseStyles());
      let routesPromise = spawnFilesInDirectory();
      await Promise.all([basePromise, routesPromise]);
      await purgeFinalCss();
    });
  }
}

function createTailwindArgs(input, output, purgePath) {
  // let root = purgePath.replace(new RegExp(`${routesPath}\/?`), '');
  // root = root.substr(0, root.lastIndexOf('.')) || root;
  // const ancestorPathnames = generateAncestorPathnames(root);

  let base = ['-i', input, '-o', output, `--content="${purgePath}"`, '--jit'];

  base.push('--minify');
  // if (process.env.NODE_ENV === 'production') {
  //   base.push('--minify');
  // }
  // } else {
  //   base.push('--watch');
  // }

  return base;
}

function spawnTailwind(pathname) {
  let outputPathname = `"${stylesRoutesPath}/${cssifyFileName(pathname)}"`;

  let tw = spawn(
    'tailwindcss',
    createTailwindArgs(
      `${stylesPath}/tailwind/route.css`,
      outputPathname,
      `${routesPath}/${pathname}`
    ),
    { shell: true }
  );

  tw.stdout.on('data', (data) => {
    console.log(data);
  });
  tw.stderr.on('data', (data) => {
    if (/no utility classes were detected in your source files/i.test(data)) {
      // TODO: don't kill but instead "skip"
      tw.kill();
    }
  });
  tw.on('error', (error) => {
    console.error(error.message);
  });
  tw.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  return tw;
}

async function spawnFilesInDirectory(directoryPath = routesPath) {
  let promises = []; // hold all the promises to know when all of the processes have closed
  let files = await readdir(directoryPath, { withFileTypes: true });

  for (let file of files) {
    if (file.isDirectory()) {
      let directoryPromise = spawnFilesInDirectory(
        `${directoryPath}/${file.name}`
      );
      promises.push(directoryPromise);
    } else {
      // find the relative path of the route from the base of the routes path
      // removing the first / if one exists and escaping all dollar signs
      let root = directoryPath.replace(routesPath, '');
      let pathname = `${root}/${file.name}`
        .replace('/', '')
        .replace(/\$/g, '\\$');
      let tw = spawnTailwind(pathname);
      promises.push(promisifyChildProcess(tw));
    }
  }

  return Promise.all(promises);
}

// turn child processes resulting from calling `spawn` into promises
// that simply resolve when the process closes
function promisifyChildProcess(childProcess) {
  return new Promise((resolve) => {
    childProcess.on('close', resolve);
  });
}

async function purgeFinalCss(directoryPath = routesPath) {
  let files = await readdir(directoryPath, { withFileTypes: true });

  let promises = files.map((file) => {
    // recursively purge all files in a directory
    if (file.isDirectory()) {
      let directoryPromise = purgeFinalCss(`${directoryPath}/${file.name}`);
      return directoryPromise;
    }

    // purge the css file

    // find the relative path of the route from the base of the routes path
    // removing the first / if one exists
    let root = directoryPath.replace(new RegExp(`${routesPath}/?`), '');
    let cssFile = cssifyFileName(file.name);

    let outFile = root
      ? `${stylesRoutesPath}/${root}/${cssFile}`
      : `${stylesRoutesPath}/${cssFile}`;
    return purgeAncestorClasses(root, outFile);
  });

  return Promise.all(promises);
}

/**
 * Adds or replaces file extension with .css
 */
function cssifyFileName(fileName) {
  return `${removeExtension(fileName)}.css`;
}

/**
 * Remove the file extension from a file name
 */
function removeExtension(fileName) {
  return fileName.substr(0, fileName.lastIndexOf('.')) || fileName;
}

/**
 * Create the base stylesheet, which consists of:
 * - css reset
 * - classnames in root.tsx
 * - classnames in components directory
 */
function spawnBaseStyles() {
  let tw = spawn(
    'tailwindcss',
    createTailwindArgs(
      `${stylesPath}/tailwind/base.css`,
      `${stylesPath}/root.css`,
      // add all of the components styles as well
      `${appPath}/root.tsx,${appPath}/components/**/*.{js,jsx,ts,tsx}`
    ),
    { shell: true }
  );

  tw.stdout.on('data', (data) => {
    console.log(data);
  });
  tw.stderr.on('data', (data) => {
    console.error(String(data));
  });
  tw.on('error', (error) => {
    console.error(error.message);
  });
  tw.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  return tw;
}

async function purgeAncestorClasses(pathname, outFile) {
  let file;
  try {
    file = await readFile(outFile);
  } catch (error) {
    // skip files that doesn't exist
    return;
  }

  // get the files to use for purging
  let filesToPurge = generateAncestorPathnames(pathname);
  let purgeCSSResult = await new PurgeCSS().purge({
    content: filesToPurge,
    css: [outFile],
  });

  let newFile = file.toString();
  for (let { css } of purgeCSSResult) {
    let re = new RegExp('(' + css.replace(/\}\./g, '}|.') + ')', 'g');
    for (let classDef of css.split('\n\n').filter(Boolean)) {
      newFile = newFile.replace(re, '');
    }
  }

  return writeFile(outFile, newFile);
}

function generateAncestorPathnames(pathname) {
  let pathnames = [`${appPath}/root.{js,jsx,ts,tsx}`];

  if (pathname !== '') {
    let segments = pathname.split('/');
    // generate the path names for all of the potential parent css files
    // skipping files that don't exist
    for (let i = 0; i < segments.length; i++) {
      let path = `${routesPath}/${segments
        .slice(0, i + 1)
        .join('/')}.{js,jsx,ts,tsx}`;

      pathnames.push(path);
    }
  }
  return pathnames;
}

/**
 * Recursively remove all the generated .css files to ensure we're starting fresh
 */
async function dumpCssFiles() {
  try {
    await rm(stylesRoutesPath, { recursive: true });
  } catch (error) {
    // if the directory doesn't exist just keep going
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }
}
