const ftoc = (value) => {
  return Math.round(((value-32)/9) * 5 * 10)/10;
};

const ctof = (value) => {
  return Math.round(((9/5) * value + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
