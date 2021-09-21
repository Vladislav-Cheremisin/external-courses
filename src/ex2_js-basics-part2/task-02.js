const arrayElementsCount = (array) => {
  let elementsCount = 0;
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
    elementsCount += 1;
  }
  console.log(elementsCount);
};

module.exports = arrayElementsCount;
