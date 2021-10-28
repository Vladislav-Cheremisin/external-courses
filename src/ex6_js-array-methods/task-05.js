const arrMap = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    result.push(callback(item, i, array));
  }

  return result;
};

module.exports = arrMap;
