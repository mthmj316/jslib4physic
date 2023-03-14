const number_utils = require('../utils/number_utils');
const math_utils = require('../utils/math_utils');


module.exports = {

	/**
	 * Adds the given forces f1 and f2 trigonometically.
	 * 
	 * gamma is the angle bewteen f1 and f2.
	 * 
	 * Additionally the alpha and beta angles are calculated, too.
	 * alpha -> angle between f1 and fr
	 * beta -> angle between f2 and fr.
	 */
	getResultingForce: function(f1, f2, gamma) {
		
		//Validation is done in addForces
		let fr = this.addForces(f1, f2, gamma);
		let sinGamma =  number_utils.sinDegrees(gamma);
		
		let result = {};
		result.fr = fr;
		result.alpha = number_utils.asinDegrees(f2/fr * sinGamma);
		result.beta = number_utils.asinDegrees(f1/fr * sinGamma);
		
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

		return math_utils.trigonometry.addVectors(f1, f2, gamma);
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