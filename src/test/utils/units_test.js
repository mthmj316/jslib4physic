const assert = require('chai').assert;
const main = require('../../public/js4physic_main');

describe('units testing', () => {
	describe('convertTons2Milligramms tesing', () => {
		it('Input: 0', () => {
			assert.equal(main.units.convertTons2Milligramms(0), 0);
		});

		it('Input: 1', () => {
			assert.equal(main.units.convertTons2Milligramms(1), 1000000000);
		});

		it('Input: 23', () => {
			assert.equal(main.units.convertTons2Milligramms(23), 23000000000);
		});
	});

	describe('convertKilograms2Milligramms tesing', () => {

		it('Input: 0', () => {
			assert.equal(main.units.convertKilograms2Milligramms(0), 0);
		});

		it('Input: 1', () => {
			assert.equal(main.units.convertKilograms2Milligramms(1), 1000000);
		});

		it('Input: 23', () => {
			assert.equal(main.units.convertKilograms2Milligramms(23), 23000000);
		});
	});

	describe('convertGrams2Milligramms tesing', () => {

		it('Input: 0', () => {
			assert.equal(main.units.convertGrams2Milligramms(0), 0);
		});

		it('Input: 1', () => {
			assert.equal(main.units.convertGrams2Milligramms(1), 1000);
		});

		it('Input: 23', () => {
			assert.equal(main.units.convertGrams2Milligramms(23), 23000);
		});
	});
	describe('convertDays2Seconds tesing', () => {

		it('Input: 0', () => {
			assert.equal(main.units.convertDays2Seconds(0), 0);
		});

		it('Input: 1', () => {
			assert.equal(main.units.convertDays2Seconds(1), 86400);
		});

		it('Input: 23', () => {
			assert.equal(main.units.convertDays2Seconds(23), 1987200);
		});
	});

	describe('convertHours2Seconds tesing', () => {
		it('Input: 0', () => {
			assert.equal(main.units.convertHours2Seconds(0), 0);
		});

		it('Input: 1', () => {
			assert.equal(main.units.convertHours2Seconds(1), 3600);
		});

		it('Input: 23', () => {
			assert.equal(main.units.convertHours2Seconds(23), 82800);
		});
	});

	describe('convertMinutes2Secondss tesing', () => {
		it('Input: 0', () => {
			assert.equal(main.units.convertMinutes2Seconds(0), 0);
		});

		it('Input: 1', () => {
			assert.equal(main.units.convertMinutes2Seconds(1), 60);
		});

		it('Input: 23', () => {
			assert.equal(main.units.convertMinutes2Seconds(23), 1380);
		});
	});
}); 