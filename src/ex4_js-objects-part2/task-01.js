const findKeyInProto = (key, obj) => obj.__proto__[key];

module.exports = findKeyInProto;
