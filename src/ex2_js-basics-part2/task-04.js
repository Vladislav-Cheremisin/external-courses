const isArrElementsTheSame = (array) => {
  const ARRAY_FIRST_ELEMENT = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== ARRAY_FIRST_ELEMENT) {
      return false;
    }
  }

  return true;
};

module.exports = isArrElementsTheSame;
