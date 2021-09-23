const oddAndEvenCounter = (array) => {
  let evenCounter = 0;
  let oddCounter = 0;
  let nullCounter = 0;

  array.forEach((element) => {
    if (typeof element === 'number' && !Number.isNaN(element)) {
      if (element % 2 === 0 && element !== 0) {
        evenCounter += 1;
      } else if (element !== 0) {
        oddCounter += 1;
      } else {
        nullCounter += 1;
      }
    }
  });

  return [evenCounter, oddCounter, nullCounter];
};

module.exports = oddAndEvenCounter;
