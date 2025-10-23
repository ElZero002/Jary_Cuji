// test/utils.test.js
const { add, greet } = require('../src/utils'); // Ajusta la ruta si es necesario

test('add positive numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('greet contains name', () => {
  expect(greet('Jary')).toContain('Jary');
});
