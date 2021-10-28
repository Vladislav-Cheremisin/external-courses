const arrEvery = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (!callback(item, i, array)) {
      return false;
    }
  }

  return true;
};

module.exports = arrEvery;
