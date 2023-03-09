const assert = require('chai').assert;
const main = require('../public/js4physic_main');


describe('main.js testing', () => {
	it('test the add function with positive values', () => {
		assert.equal(main.add(2,4), 6);
	});
	
	it('test the add function with negative values', () => {
		assert.equal(main.add(-1, -5), -6);
	});
}); 