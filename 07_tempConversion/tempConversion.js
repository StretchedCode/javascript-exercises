const ftoc = function(temperature) {

  let newTemp = Math.round(((temperature - 32) * (5/9)) * 10) / 10;
  return newTemp;
};

const ctof = function(temperature) {

  let newTemp = Math.round(((temperature * (9/5)) + 32) * 10) / 10;
  return newTemp;
};

console.log(ftoc(100));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
