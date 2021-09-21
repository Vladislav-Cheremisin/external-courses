const isArrElementsTheSame = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== array[0]) {
      return false;
    }
  }
  return true;
};

module.exports = isArrElementsTheSame;
