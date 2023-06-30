const exec = require('../utils/asyncExec.js');
const loadingLog = require('../utils/loadingLog.js');

const execWithLoadingMessage = async (command, message) => {
  // Iniciando loading.
  const loadingInterval = loadingLog(message);
  const stopLoading = () => clearInterval(loadingInterval);

  // Executando o CRA padrão do React com o template de TypeScript.
  await exec(command, stopLoading, stopLoading);
};

const installDependencies = async () => {
  await execWithLoadingMessage('npm i --legacy-peer-deps', 'Instalando dependências.');
};

module.exports = {
  installDependencies,
};
