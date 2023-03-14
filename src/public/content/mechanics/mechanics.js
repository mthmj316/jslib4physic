const statics = require('./statics');

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
		return statics.getResultingForce(f1, f2, gamma);
	},

	/**
	 * Adds the given forces f1 and f2
	 * Gamma is the angle at which the two forces are in relation to each other.
	 */
	addForces: function(f1, f2, gamma) {
		return statics.addForces(f1, f2, gamma);
	},

	/**
	 * Adds the given forces f1 and f2
	 * Forces f1 and f2 must be at 90 degrees to each other.
	 */
	addVerticalForces: function(f1, f2) {
		return statics.addVerticalForces(f1, f2);
	},

	/**
	 * Adds the passed parallel forces (forces with the same line of action)
	 * All forces need to be in the same scale
	 */
	addParallelForces: function(forces) {
		return statics.addParallelForces(forces);
	}
}