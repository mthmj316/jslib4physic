const number_utils = require('../utils/number_utils');

module.exports = {

	getResultingForce: function(f1, f2, gamma) {
		
		let fr = this.addForces(f1, f2, gamma);
		
		let sinGamma =  number_utils.sinDegrees(gamma);
		
		console.log('sinGamma -> ' + sinGamma);
		
		let alpha = number_utils.asinDegrees(f2/fr * sinGamma);
		let beta = number_utils.asinDegrees(f1/fr * sinGamma);
		
		console.log('alpha -> ' + alpha);
		
		let result = {};
		result.fr = fr;
		result.alpha = alpha;
		result.beta = beta;
		
		return result;
	},

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



		fr = Math.sqrt(Math.pow(f1, 2) + Math.pow(f2, 2) + 2 * f1 * f2 * number_utils.cosDegrees(gamma));

		return fr;
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

		if (forces == null) {
			throw new Error('forces was null');
		}

		let sum = 0;

		forces.forEach((f) => sum = sum + f);

		return sum;
	}
}