const capitalizeFirstLetters = (str) => str.split(' ')
  .map((element) => element[0].toUpperCase() + element.slice(1, element.length))
  .join(' ');

module.exports = capitalizeFirstLetters;
