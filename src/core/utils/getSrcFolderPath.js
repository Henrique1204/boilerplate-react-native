const getSrcFolderPath = (...paths) => {
  return `${__dirname.split('src')[0]}src/${paths.join('/')}`;
};

module.exports = {
  getSrcFolderPath,
};
