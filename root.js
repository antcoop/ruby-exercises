const increment = (num) => {
  if (num === 10) {
    return num * 10;
  }

  if (num === 20) {
    return num / 5;
  }

  return num + 1;
};

module.exports = {
  increment
};