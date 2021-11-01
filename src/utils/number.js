module.exports = {
  isOnlyNumber(str) {
    let control = true;

    for (let i = 0; i < str.length; i++) {
      if ('0123456789,-+'.indexOf(str[i]) === -1) {
        control = false;
        break;
      }
    }

    return control;
  },

  convertNumberToFloat(number) {
    return parseFloat(number.replace(/\s/g, '').replace(',', '.'));
  },
};
