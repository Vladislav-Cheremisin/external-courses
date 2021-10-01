const addStringInSentence = (str, substr, pos) => {
  const result = str.split(' ');
  result.splice(pos + 1, 0, substr);
  return result.join(' ');
};

module.exports = addStringInSentence;
