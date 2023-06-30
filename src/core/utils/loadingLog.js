const loadingLog = (message) => {
  const loadingBar = ['\\', '|', '/', '-'];
  let index = 0;

  return setInterval(() => {
    process.stdout.write('\r' + (message || '') + '  ' + loadingBar[index++]);

    index &= 3;
  }, 250);
};

module.exports = loadingLog;
