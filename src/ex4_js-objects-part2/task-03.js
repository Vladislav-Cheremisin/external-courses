const removeFirstAndLastWhitespace = (str) => {
  let result = '';
  result += str.slice(0, str.indexOf(' '));
  result += str.slice(str.indexOf(' ') + 1, str.lastIndexOf(' '));
  result += str.slice(str.lastIndexOf(' ') + 1, str.length);
  return result;
};

module.exports = removeFirstAndLastWhitespace;
