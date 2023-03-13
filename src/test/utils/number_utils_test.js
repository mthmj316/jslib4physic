const assert = require('chai').assert;
const main = require('../../public/js4physic_main');

describe('number_utils.js testing', () => {

	describe('sinDegrees testing', () => {

		it('Input: n', () => {
			assert.throws(() => { main.numberUtils.sinDegrees('n') }, Error, 'angle \'n\' is not a number!');
		});

		it('Input: 0', () => {
			assert.equal(main.numberUtils.sinDegrees(0), 0);
		});

		it('Input: 90', () => {
			assert.equal(main.numberUtils.sinDegrees(90), 1);
		});

		it('Input: 180', () => {
			assert.equal(main.numberUtils.sinDegrees(180), 0);
		});

		it('Input: 270', () => {
			assert.equal(main.numberUtils.sinDegrees(270), -1);
		});

		it('Input: 360', () => {
			assert.equal(main.numberUtils.sinDegrees(360), 0);
		});
	});

	describe('cosDegrees testing', () => {

		it('Input: n', () => {
			assert.throws(() => { main.numberUtils.cosDegrees('n') }, Error, 'angle \'n\' is not a number!');
		});

		it('Input: 0', () => {
			assert.equal(main.numberUtils.cosDegrees(0), 1);
		});

		it('Input: 90', () => {
			assert.equal(main.numberUtils.cosDegrees(90), 0);
		});

		it('Input: 180', () => {
			assert.equal(main.numberUtils.cosDegrees(180), -1);
		});

		it('Input: 270', () => {
			assert.equal(main.numberUtils.cosDegrees(270), 0);
		});

		it('Input: 360', () => {
			assert.equal(main.numberUtils.cosDegrees(360), 1);
		});
	});

	describe('minDecimalPlaces testing', () => {

		it('Input: 0', () => {
			assert.equal(main.numberUtils.minDecimalPlaces(['0']), 0);
		});

		it('Input: 0.0', () => {
			assert.equal(main.numberUtils.minDecimalPlaces(['0.0']), 1);
		});

		it('Input: [0.0,1]', () => {
			assert.equal(main.numberUtils.minDecimalPlaces(['0.0', '1']), 0);
		});

		it('Input: [0.0111,1.222, 3.66222]', () => {
			assert.equal(main.numberUtils.minDecimalPlaces([0.0111, 1.222, 3.66222]), 3);
		});
	});
});