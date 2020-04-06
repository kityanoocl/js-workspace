const add = require('../main');

if ('should add two numbers', () => {
	expect(add(2, 3)).toBe(5);
});
