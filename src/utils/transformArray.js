const fields = require('./fields');
const handleNumber = require('./number');

const getNewObject = data => {
  let obj = {};

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];

    obj[field] = handleNumber.isOnlyNumber(data[i])
      ? handleNumber.convertNumberToFloat(data[i])
      : data[i];
  }

  return obj;
};

module.exports = getNewObject;
