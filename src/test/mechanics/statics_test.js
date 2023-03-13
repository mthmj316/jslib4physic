const assert = require('chai').assert;
const main = require('../../public/js4physic_main');

describe('mechanics testing', () => {

	describe('statics testing', () => {

		// #################################################
		// #################################################
		// Adding forces
		// #################################################
		// #################################################
		describe.only('getResultingForce testing', () => {
			
			it('Input: 23, 39, H', () => {
				assert.throw(() => { main.statics.getResultingForce(23, 39, 'H') }, Error, 'gamma is not a number');
			});

			it('Input: 23, f2, 30', () => {
				assert.throws(() => { main.statics.getResultingForce(23, 'f2', 30) }, Error, 'f2 is not a number');
			});

			it('Input: f1, 50, 30', () => {
				assert.throws(() => { main.statics.getResultingForce('f1', 50, 30) }, Error, 'f1 is not a number');
			});

			it('Input: <nothing>', () => {
				assert.throws(() => { main.statics.getResultingForce() }, Error, 'f1 is not a number');
			});

			it('Input: null', () => {
				assert.throws(() => { main.statics.getResultingForce(null) }, Error, 'f1 is not a number');
			});

			it('Input: null, null', () => {
				assert.throws(() => { main.statics.getResultingForce(null, null) }, Error, 'f1 is not a number');
			});

			it('Input: null, null, null', () => {
				assert.throws(() => { main.statics.getResultingForce(null, null, null) }, Error, 'f1 is not a number');
			});

			it('Input: 30, null, null', () => {
				assert.throws(() => { main.statics.getResultingForce(30, null, null) }, Error, 'f2 is not a number');
			});

			it('Input: null, 30, null', () => {
				assert.throws(() => { main.statics.getResultingForce(null, 60, null) }, Error, 'f1 is not a number');
			});

			it('Input: null, null, 45', () => {
				assert.throws(() => { main.statics.getResultingForce(null, null, 45) }, Error, 'f1 is not a number');
			});

			it('Input: 23, 39, null', () => {
				assert.throws(() => { main.statics.getResultingForce(23, 39, null) }, Error, 'gamma is not a number');
			});

			it('Input: null, 39, 30', () => {
				assert.throws(() => { main.statics.getResultingForce(null, 39, 30) }, Error, 'f1 is not a number');
			});

			it('Input: 23, null, 30', () => {
				assert.throws(() => { main.statics.getResultingForce(23, null, 30) }, Error, 'f2 is not a number');
			});
			
			it('Input: f1=23, f2=45, gamma=40', () => {
				
				let expected = {fr:70.7, alpha:24.2, beta:15.8};
				let actual = main.statics.getResultingForce(23, 45, 40);
				
				let actualFixed = {};
				actualFixed.fr = actual.fr.toFixed(1);
				actualFixed.alpha = actual.alpha.toFixed(1);
				actualFixed.beta = actual.beta.toFixed(1);
				
				assert.deepEqual(expected, actual);
			});
		});

		describe('addForces testing', () => {
			//Input Force 1, Force 2, angle 
			it('Input: 23, 39, H', () => {
				assert.throw(() => { main.statics.addForces(23, 39, 'H') }, Error, 'gamma is not a number');
			});

			it('Input: 23, f2, 30', () => {
				assert.throws(() => { main.statics.addForces(23, 'f2', 30) }, Error, 'f2 is not a number');
			});

			it('Input: f1, 50, 30', () => {
				assert.throws(() => { main.statics.addForces('f1', 50, 30) }, Error, 'f1 is not a number');
			});

			it('Input: <nothing>', () => {
				assert.throws(() => { main.statics.addForces() }, Error, 'f1 is not a number');
			});

			it('Input: null', () => {
				assert.throws(() => { main.statics.addForces(null) }, Error, 'f1 is not a number');
			});

			it('Input: null, null', () => {
				assert.throws(() => { main.statics.addForces(null, null) }, Error, 'f1 is not a number');
			});

			it('Input: null, null, null', () => {
				assert.throws(() => { main.statics.addForces(null, null, null) }, Error, 'f1 is not a number');
			});

			it('Input: 30, null, null', () => {
				assert.throws(() => { main.statics.addForces(30, null, null) }, Error, 'f2 is not a number');
			});

			it('Input: null, 30, null', () => {
				assert.throws(() => { main.statics.addForces(null, 60, null) }, Error, 'f1 is not a number');
			});

			it('Input: null, null, 45', () => {
				assert.throws(() => { main.statics.addForces(null, null, 45) }, Error, 'f1 is not a number');
			});

			it('Input: 23, 39, null', () => {
				assert.throws(() => { main.statics.addForces(23, 39, null) }, Error, 'gamma is not a number');
			});

			it('Input: null, 39, 30', () => {
				assert.throws(() => { main.statics.addForces(null, 39, 30) }, Error, 'f1 is not a number');
			});

			it('Input: 23, null, 30', () => {
				assert.throws(() => { main.statics.addForces(23, null, 30) }, Error, 'f2 is not a number');
			});

			it('Input: 23, 39, 30', () => {
				assert.equal(main.statics.addForces(23, 39, 30).toFixed(2), '60.03');
			});

			it('Input: 23.0, 39.0, 30.0', () => {
				assert.equal(main.statics.addForces(23.2, 39.9, 30.7).toFixed(1), '61.0');
			});

			it('Input: 23, 39, 0', () => {
				assert.equal(main.statics.addForces(23, 39, 0), 62);
			});

			it('Input: 50.0, 30.0, -29.0', () => {
				assert.equal(main.statics.addForces(50, 30, -29).toFixed(1), 77.6);
			});

			it('Input: 50, -30, 331', () => {
				assert.equal(main.statics.addForces(50, -30, 331).toFixed(2), '27.86');
			});
		});

		describe('addVerticalForces testing', () => {
			// Input: Force 1, Force 2
			it('Input: <nothing>', () => {
				assert.throw(() => { main.statics.addVerticalForces() }, Error, 'f1 is not a number');
			});

			it('Input: null', () => {
				assert.throw(() => { main.statics.addVerticalForces(null) }, Error, 'f1 is not a number');
			});

			it('Input: null, null', () => {
				assert.throw(() => { main.statics.addVerticalForces(null, null) }, Error, 'f1 is not a number');
			});

			it('Input: 30, null', () => {
				assert.throw(() => { main.statics.addVerticalForces(30, null) }, Error, 'f2 is not a number');
			});

			it('Input: null, 30', () => {
				assert.throw(() => { main.statics.addVerticalForces(null, 30) }, Error, 'f1 is not a number');
			});

			it('Input: 45, 0', () => {
				assert.equal(main.statics.addVerticalForces(45, 0), 45);
			});

			it('Input: 0, 30', () => {
				assert.equal(main.statics.addVerticalForces(0, 30), 30);
			});

			it('Input: 45, 30', () => {
				assert.equal(main.statics.addVerticalForces(45, 30).toFixed(2), '54.08');
			});

			it('Input: -17, 30', () => {
				assert.equal(main.statics.addVerticalForces(-17, 30).toFixed(2), '34.48');
			});
		});

		describe('addParallelForces testing', () => {

			it('Input: null', () => {
				assert.throw(() => { main.statics.addParallelForces(null) }, Error, 'forces was null');
			});

			it('Input: []', () => {
				assert.equal(main.statics.addParallelForces([]), 0);
			});

			it('Input: [0]', () => {
				assert.equal(main.statics.addParallelForces([0]), 0);
			});

			it('Input: [30]', () => {
				assert.equal(main.statics.addParallelForces([30]), 30);
			});

			it('Input: [30, 12]', () => {
				assert.equal(main.statics.addParallelForces([30, 12]), 42);
			});

			it('Input: [30, 12, 5, -17]', () => {
				assert.equal(main.statics.addParallelForces([30, 12, 5, -11]), 36);
			});
		});
	});
}); 