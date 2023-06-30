const util = require('util');

const fs = require('fs');
const fse = require('fs-extra');

const readFileAsync = util.promisify(fs.readFile);
const renameFileAsync = util.promisify(fs.rename);
const readDirAsync = util.promisify(fs.readdir);
const writeFileAsync = util.promisify(fs.writeFile);
const copyFileAsync = util.promisify(fs.copyFile);
const lsStatAsync = util.promisify(fs.lstat);

const copyFolderAsync = fse.copy;

module.exports = {
  readFileAsync,
  renameFileAsync,
  readDirAsync,
  writeFileAsync,
  copyFileAsync,
  lsStatAsync,

  copyFolderAsync,
};
