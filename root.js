const increment = (num) => {
  if (num === 10) {
    return num * 10;
  }
  return num + 1;
};

module.exports = {
  increment
};