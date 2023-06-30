const { fileToChangeProjectName, gitignoreFileName } = require('../constants');

const { readFileAsync, writeFileAsync, renameFileAsync } = require('../utils/fsAsync');

const dirname = process.cwd();

const replaceContentFile = (regex, value) => async (file) => {
  const path = `${dirname}/${file}`;

  const data = await readFileAsync(path, 'utf8');

  const newContent = data.replace(regex, value);

  await writeFileAsync(path, newContent);
};

const replaceContent = async (name) => {
  try {
    await replaceContentFile(/\${project-name}/g, name)(fileToChangeProjectName);

    await renameFileAsync(`${dirname}/${gitignoreFileName}`, `${dirname}/.gitignore`);
  } catch ({ message }) {
    console.error('[ERROR]', 'Erro ao renomar o projeto.');
    console.error(message, '\n');
  }
};

module.exports = {
  replaceContent,
};
