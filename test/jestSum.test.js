const jestSum = require('./jestSum');

test('add 1 + 2 to equal 3', () => {
  expect(jestSum(1,2)).toBe(3);
})
