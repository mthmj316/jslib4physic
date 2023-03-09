const assert = require('chai').assert;
const main = require('../public/js4physic_main');


describe('mechanics testing', () => {
	describe('time_units tesing', () => {
		
		it('convert 0 days to seconds', () => {
			assert.equal(main.convertDays2Seconds(0), 0);
		});

		it('convert 1 day to seconds', () => {
			assert.equal(main.convertDays2Seconds(1), 86400);
		});
		
		it('convert several days to seconds', () => {
			assert.equal(main.convertDays2Seconds(23), 1987200);
		});
		
		it('convert 0 hours to seconds', () => {
			assert.equal(main.convertDays2Seconds(0), 0);
		});

		it('convert 1 hour to seconds', () => {
			assert.equal(main.convertHours2Seconds(1), 3600);
		});
		
		it('convert several hours to seconds', () => {
			assert.equal(main.convertHours2Seconds(23), 82800);
		});
		
		it('convert 0 minutes to seconds', () => {
			assert.equal(main.convertHours2Seconds(0), 0);
		});

		it('convert 1 minutes to seconds', () => {
			assert.equal(main.convertMinutes2Seconds(1), 60);
		});
		
		it('convert several minutes to seconds', () => {
			assert.equal(main.convertMinutes2Seconds(23), 1380);
		});
	})
}); 