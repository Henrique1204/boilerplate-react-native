const asyncLooping = async (list, cb) => {
  for (i = 0; i < list.length; i++) {
    await cb(list[i]);
  }
};

module.exports = {
  asyncLooping,
};
