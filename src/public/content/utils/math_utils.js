const number_utils = require('./number_utils');

module.exports.trigonometry = {

	/**
	 * Adds the given vectors.
	 * 
	 * v1 = absolute value of vector 1
	 * v2 = absolute value of vecor 2
	 * gamma = angle between vector 1 and 2.
	 * 
	 * A data validation is not performed.
	 */
	addVectors: function(v1, v2, gamma){
		
		let vr = Math.sqrt(Math.pow(v1, 2) + Math.pow(v2, 2) + 2 * v1 * v2 * number_utils.cosDegrees(gamma));

		return vr;
	}	
}