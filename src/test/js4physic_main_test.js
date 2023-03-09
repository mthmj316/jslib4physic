const assert = require('chai').assert;
const main = require('../public/js4physic_main');

describe('mechanics testing', () => {
	describe('mass_unit tesing', () => {
		
		it('convertTons2Milligramms -> 0', () => {
			assert.equal(main.convertTons2Milligramms(0), 0);
		});

		it('convertTons2Milligramms -> 1', () => {
			assert.equal(main.convertTons2Milligramms(1), 1000000000);
		});
		
		it('convertTons2Milligramms -> 23', () => {
			assert.equal(main.convertTons2Milligramms(23), 23000000000);
		});
		
		it('convertKilograms2Milligramms -> 0', () => {
			assert.equal(main.convertKilograms2Milligramms(0), 0);
		});

		it('convertKilograms2Milligramms -> 1', () => {
			assert.equal(main.convertKilograms2Milligramms(1), 1000000);
		});
		
		it('convertKilograms2Milligramms -> 23', () => {
			assert.equal(main.convertKilograms2Milligramms(23), 23000000);
		});
		
		it('convertGrams2Milligramms -> 0', () => {
			assert.equal(main.convertGrams2Milligramms(0), 0);
		});

		it('convertGrams2Milligramms -> 1', () => {
			assert.equal(main.convertGrams2Milligramms(1), 1000);
		});
		
		it('convertGrams2Milligramms -> 23', () => {
			assert.equal(main.convertGrams2Milligramms(23), 23000);
		});
	});	
	describe('time_units tesing', () => {
		
		it('convertDays2Seconds -> 0', () => {
			assert.equal(main.convertDays2Seconds(0), 0);
		});

		it('convertDays2Seconds -> 1', () => {
			assert.equal(main.convertDays2Seconds(1), 86400);
		});
		
		it('convertDays2Seconds -> 23', () => {
			assert.equal(main.convertDays2Seconds(23), 1987200);
		});
		
		it('convertHours2Seconds -> 0', () => {
			assert.equal(main.convertHours2Seconds(0), 0);
		});

		it('convertHours2Seconds -> 1', () => {
			assert.equal(main.convertHours2Seconds(1), 3600);
		});
		
		it('convertHours2Seconds -> 23', () => {
			assert.equal(main.convertHours2Seconds(23), 82800);
		});
		
		it('convertMinutes2Seconds -> 0', () => {
			assert.equal(main.convertMinutes2Seconds(0), 0);
		});

		it('convertMinutes2Seconds -> 1', () => {
			assert.equal(main.convertMinutes2Seconds(1), 60);
		});
		
		it('convertMinutes2Seconds -> 23', () => {
			assert.equal(main.convertMinutes2Seconds(23), 1380);
		});
	})
}); 