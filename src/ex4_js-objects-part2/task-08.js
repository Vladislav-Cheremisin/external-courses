const toLowerCamelCase = (str) => {
  const result = str.split(' ').map((element) => element[0].toUpperCase() + element.slice(1).toLowerCase());
  result[0] = result[0].toLowerCase();
  return result.join('');
};

module.exports = toLowerCamelCase;
