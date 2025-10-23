const { add, greet } = require('../src/utils');

test('add positive numbers', () => {
  expect(add(2,3)).toBe(5);
});

test('add negatives', () => {
  expect(add(-1, -1)).toBe(-2);
});

test('greet contains name', () => {
  expect(greet('Jary')).toMatch(/Jary/);
});
