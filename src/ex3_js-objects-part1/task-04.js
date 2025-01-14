const checkOrCreateProp = (str, obj) => {
  const newObj = { ...obj };

  if (Object.keys(obj).includes(str)) {
    return newObj;
  }

  newObj[str] = 'new';
  return newObj;
};

module.exports = checkOrCreateProp;
