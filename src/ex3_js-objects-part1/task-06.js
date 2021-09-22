const objDeepClone = (obj) => {
  const objClone = { ...obj };
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) {
      objClone[prop] = objDeepClone(obj[prop]);
    }
    if (Array.isArray(obj[prop])) {
      objClone[prop] = [];
      obj[prop].forEach((element) => {
        if (typeof element === 'object' && !Array.isArray(element)) {
          objClone[prop].push(objDeepClone(element));
        } else {
          objClone[prop].push(element);
        }
      });
    }
  });
  return objClone;
};

module.exports = objDeepClone;
