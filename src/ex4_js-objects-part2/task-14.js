const getRandomNum = (min, max) => Math.ceil((Math.random() * ((max - 1) - min)) + min);

module.exports = getRandomNum;
