const assert = require('chai').assert;
const main = require('../public/js4physic_main');

describe('mechanics testing', () => {

	describe('statics testing', () => {

		// #################################################
		// #################################################
		// Adding forces
		// #################################################
		// #################################################
		describe('addForces testing', () => {
			//Input Force 1, Force 2, angle 
			it('Input: <nothing>', () => {
				assert.equal(main.addForces(), 0);
			});

			it('Input: null', () => {
				assert.equal(main.addForces(null), 0);
			});

			it('Input: null, null', () => {
				assert.equal(main.addForces(null, null), 0);
			});

			it('Input: null, null, null', () => {
				assert.equal(main.addForces(null, null, null), 0);
			});

			it('Input: 30, null, null', () => {
				assert.equal(main.addForces(30, null, null), 30);
			});

			it('Input: null, 30, null', () => {
				assert.equal(main.addForces(null, 60, null), 60);
			});

			it('Input: null, null, 45', () => {
				assert.equal(main.addForces(null, null, 45), 0);
			});

			it('Input: 23, 39, null', () => {
				assert.equal(main.addForces(23, 39, null), 62);
			});

			it('Input: null, 39, 30', () => {
				assert.equal(main.addForces(null, 39, 30), 39);
			});

			it('Input: 23, null, 30', () => {
				assert.equal(main.addForces(23, null, 30), 23);
			});

			it('Input: 23, 39, 30', () => {
				assert.equal(main.addForces( 23, 39, 30), 155);
			});

			it('Input: 23.0, 39.0, 30.0', () => {
				assert.equal(main.addForces(23.0, 39.0, 30.0), 154.8);
			});

			it('Input: 23.00, 39.00, 30.000', () => {
				assert.equal(main.addForces(23.00, 39.00, 30.00), 154.79);
			});
		});

		describe('addVerticalForces testing', () => {
			// Input: Force 1, Force 2
			it('Input: <nothing>', () => {
				assert.equal(main.addVerticalForces(), 0);
			});

			it('Input: null', () => {
				assert.equal(main.addVerticalForces(null), 0);
			});

			it('Input: null, null', () => {
				assert.equal(main.addVerticalForces(null, null), 0);
			});

			it('Input: 30, null', () => {
				assert.equal(main.addVerticalForces(30, null), 30);
			});

			it('Input: null, 30', () => {
				assert.equal(main.addVerticalForces(null, 30), 30);
			});

			it('Input: null, 30', () => {
				assert.equal(main.addVerticalForces(null, 30), 30);
			});

			it('Input: 45, 30', () => {
				assert.equal(main.addVerticalForces(45, 30), 54);
			});

			it('Input: -17, 30', () => {
				assert.equal(main.addVerticalForces(-17, 30), 34);
			});

			it('Input: -17.0, 30', () => {
				assert.equal(main.addVerticalForces(-17.0, 30), 34, 5);
			});

			it('Input: -17.23, 30.244', () => {
				assert.equal(main.addVerticalForces(-17.23, 30, 244), 34, 80);
			});
		});

		describe('addParallelForces testing', () => {

			it('Input: null', () => {
				assert.equal(main.addParallelForces(null), 0);
			});

			it('Input: []', () => {
				assert.equal(main.addParallelForces([]), 0);
			});

			it('Input: [0]', () => {
				assert.equal(main.addParallelForces([0]), 0);
			});

			it('Input: [30]', () => {
				assert.equal(main.addParallelForces([30]), 30);
			});

			it('Input: [30, 12]', () => {
				assert.equal(main.addParallelForces([30, 12]), 42);
			});

			it('Input: [30, 12, 5, -17]', () => {
				assert.equal(main.addParallelForces([30, 12, 5, -11]), 36);
			});
		});
	});
	describe('mass_unit tesing', () => {

		describe('convertTons2Milligramms tesing', () => {
			it('Input: 0', () => {
				assert.equal(main.convertTons2Milligramms(0), 0);
			});

			it('Input: 1', () => {
				assert.equal(main.convertTons2Milligramms(1), 1000000000);
			});

			it('Input: 23', () => {
				assert.equal(main.convertTons2Milligramms(23), 23000000000);
			});
		});

		describe('convertKilograms2Milligramms tesing', () => {

			it('Input: 0', () => {
				assert.equal(main.convertKilograms2Milligramms(0), 0);
			});

			it('Input: 1', () => {
				assert.equal(main.convertKilograms2Milligramms(1), 1000000);
			});

			it('Input: 23', () => {
				assert.equal(main.convertKilograms2Milligramms(23), 23000000);
			});
		});

		describe('convertGrams2Milligramms tesing', () => {

			it('Input: 0', () => {
				assert.equal(main.convertGrams2Milligramms(0), 0);
			});

			it('Input: 1', () => {
				assert.equal(main.convertGrams2Milligramms(1), 1000);
			});

			it('Input: 23', () => {
				assert.equal(main.convertGrams2Milligramms(23), 23000);
			});
		});
	});
	describe('time_units tesing', () => {

		describe('convertDays2Seconds tesing', () => {

			it('Input: 0', () => {
				assert.equal(main.convertDays2Seconds(0), 0);
			});

			it('Input: 1', () => {
				assert.equal(main.convertDays2Seconds(1), 86400);
			});

			it('Input: 23', () => {
				assert.equal(main.convertDays2Seconds(23), 1987200);
			});
		});

		describe('convertHours2Seconds tesing', () => {
			it('Input: 0', () => {
				assert.equal(main.convertHours2Seconds(0), 0);
			});

			it('Input: 1', () => {
				assert.equal(main.convertHours2Seconds(1), 3600);
			});

			it('Input: 23', () => {
				assert.equal(main.convertHours2Seconds(23), 82800);
			});
		});

		describe('convertMinutes2Secondss tesing', () => {
			it('Input: 0', () => {
				assert.equal(main.convertMinutes2Seconds(0), 0);
			});

			it('Input: 1', () => {
				assert.equal(main.convertMinutes2Seconds(1), 60);
			});

			it('Input: 23', () => {
				assert.equal(main.convertMinutes2Seconds(23), 1380);
			});
		});

	})
}); 