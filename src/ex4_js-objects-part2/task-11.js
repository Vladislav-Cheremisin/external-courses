const letterRepeatCount = (str) => {
  const arrWithLetters = str.split('').sort();
  let currentLetter = arrWithLetters[0];
  let letterCounter = 0;

  for (let i = 0; i < arrWithLetters.length + 1; i += 1) {
    if (arrWithLetters[i] === currentLetter) {
      letterCounter += 1;
    } else {
      console.log(`${currentLetter}: ${letterCounter}`);
      currentLetter = arrWithLetters[i];
      letterCounter = 1;
    }
  }
};

module.exports = letterRepeatCount;
