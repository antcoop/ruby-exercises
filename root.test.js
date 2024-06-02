const increment = (num) => {
  if (num === 10) {
    return num * 10;
  }
  return num;
}

describe('Root', () => {
  test('increments by 1', () => {
    const value = 2;
    const result = increment(1);

    expect(result).toEqual(value);
  });
});