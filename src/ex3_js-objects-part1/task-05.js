const copyObject = (obj) => {
  const resultObj = {};
  Object.assign(resultObj, obj);
  return resultObj;
};

module.exports = copyObject;
