const arrReduce = (array, callback, initialValue = array[0]) => {
  let previousValue = initialValue;
  let iterator = 0;

  if (initialValue === array[0]) {
    iterator = 1;
  }

  for (let i = iterator; i < array.length; i += 1) {
    const currentItem = array[i];
    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
};

module.exports = arrReduce;
