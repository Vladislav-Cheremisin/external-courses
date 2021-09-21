const isStringOrNumber = (data) => {
  if (typeof data === 'string') {
    return 'string';
  }
  if (typeof data === 'number' && !Number.isNaN(data)) {
    return 'number';
  }
  return undefined;
};

module.exports = isStringOrNumber;
