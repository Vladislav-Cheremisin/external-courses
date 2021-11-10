const makeStrShorter = (str, maxLength) => (str.length > maxLength ? `${str.slice(0, maxLength - 1)}…` : str);

module.exports = makeStrShorter;
