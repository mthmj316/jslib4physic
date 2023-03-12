const number_utils = require('../utils/number_utils');

module.exports = {

	/**
	 * Adds the given forces f1 and f2
	 * Gamma is the angle at which the two forces are in relation to each other.
	 * 
	 * Any parameter which is not set will cause an error.	 * 
	 * If a passed parameter is not a number an error will be thrown
	 */
	addForces: function(f1, f2, gamma) {

		// Input check
		{
			if (f1 === undefined || !number_utils.isNumber(f1)) {
				throw new Error('f1 is not a number');
			}

			if (f2 === undefined || !number_utils.isNumber(f2)) {
				throw new Error('f2 is not a number');
			}

			if (gamma === undefined || !number_utils.isNumber(gamma)) {
				throw new Error('gamma is not a number');
			}
		}
		
		fr = Math.sqrt(Math.pow(f1,2) + Math.pow(f2,2) + 2*f1*f2*Math.cos(gamma));
		
		const numberOfDecimalPlaces = number_utils.minDecimalPlaces([f1, f2, gamma]);

		console.log(f1);
		console.log(f2);
		console.log(fr);
		console.log(numberOfDecimalPlaces);
		console.log(fr.toFixed(numberOfDecimalPlaces));
		return fr.toFixed(numberOfDecimalPlaces);
	},

	/**
	 * Adds the given forces f1 and f2
	 * Forces f1 and f2 must be at 90 degrees to each other.
	 */
	addVerticalForces: function(f1, f2) {
		return this.addForces(f1, f2, 90);
	},

	/**
	 * Adds the passed parallel forces (forces with the same line of action)
	 * All forces need to be in the same scale
	 */
	addParallelForces: function(forces) {

		if (forces == null || forces.length == 0) {
			return 0;
		}

		let sum = 0;

		forces.forEach((f) => sum = sum + f);

		return sum;
	}
}