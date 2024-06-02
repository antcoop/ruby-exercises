const { increment } = require('./root.js');

describe('Root', () => {
  test('increments by 1', () => {
    const value = 2;
    const result = increment(1);

    expect(result).toEqual(value);
  });
});