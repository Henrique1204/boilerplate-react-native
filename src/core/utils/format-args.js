const { typeFlagValidValues, themeFlagValidValues } = require('../constants');

const [_, __, name] = process.argv;
const dirname = process.cwd();

const formatArgs = () => {
  const [folderName] = dirname.split(/[/\\]/g).reverse();

  return {
    name: (name === '.' ? folderName : name).toLowerCase(),
  };
};

module.exports = {
  formatArgs,
};
