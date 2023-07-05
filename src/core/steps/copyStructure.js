const { asyncLooping } = require('../utils/asyncLooping');
const { copyFolderAsync, copyFileAsync, readDirAsync, lsStatAsync } = require('../utils/fsAsync');
const { getSrcFolderPath } = require('../utils/getSrcFolderPath');

const dirname = process.cwd();

const copyFileOrFolder = (structurePath) => async (path) => {
  const copyPath = `${structurePath}/${path}`;
  const destiny = `${dirname}/${path}`;

  const pathStat = await lsStatAsync(copyPath);

  if (pathStat.isDirectory()) return await copyFolderAsync(copyPath, destiny);

  await copyFileAsync(copyPath, destiny);
};

const copyStructure = async () => {
  try {
    const structurePath = getSrcFolderPath('folder-model');

    const paths = await readDirAsync(structurePath);

    await asyncLooping(paths, copyFileOrFolder(structurePath));
  } catch ({ message }) {
    console.error('[ERROR]', 'Erro ao copiar estrutura.');
    console.error(message, '\n');
  }
};

module.exports = {
  copyStructure,
};
