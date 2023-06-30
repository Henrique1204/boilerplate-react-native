const util = require('util');

const execNode = util.promisify(require('child_process').exec);

const exec = async (command, cbSuccess, cbError) => {
  try {
    const { stdout } = await execNode(command);

    console.log('\n\n' + stdout + '\n\n');

    !!cbSuccess && cbSuccess();
  } catch (e) {
    !!cbError && cbError();

    console.log('\n\n' + e.message + '\n\n');

    throw e;
  }
};

module.exports = exec;
