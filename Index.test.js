const sayHello = require('./Index');

test('returns "Hola Mundo"', () => {
  expect(sayHello()).toBe('Hola Mundo');
});
