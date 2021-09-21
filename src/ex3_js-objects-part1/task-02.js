const showProperties = (obj) => {
  Object.keys(obj).forEach((element) => {
    console.log(`${element}: ${obj[element]}`);
  });
};

module.exports = showProperties;
