const { increment } = require('./root.js');

describe('Root', () => {
  test('increments by 1', () => {
    const value = 2;
    const result = increment(1);

    expect(result).toEqual(value);
  });

  test('increments by 1 unless 10', () => {
    const value = 100;
    const result = increment(10);

    expect(result).toEqual(value);
  });
});