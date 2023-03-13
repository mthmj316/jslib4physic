const mechanics = require('./content/mechanics/mechanics');
const numberUtils = require('./content/utils/number_utils');
const units = require('./content/utils/units');

module.exports.statics = {

	/**
	 * Adds the given forces f1 and f2
	 * Gamma is the angle at which the two forces are in relation to each other.
	 */
	addForces: function(f1, f2, gamma) {
		return mechanics.addForces(f1, f2, gamma);
	},

	/**
	 * Adds the given forces f1 and f2
	 * Forces f1 and f2 must be at 90 degrees to each other.
	 */
	addVerticalForces: function(f1, f2) {
		return mechanics.addVerticalForces(f1, f2);
	},

	/**
	 * Adds the passed parallel forces (forces with the same line of action)
	 * All forces need to be in the same scale
	 */
	addParallelForces: function(forces) {
		return mechanics.addParallelForces(forces);
	}
}

module.exports.numberUtils = {

	/**
 	 * Returns for the given angle the cos value.
	 * 
	 * If aangle is not a valid number an Error will be thrown.
 	*/
	cosDegrees: function(radient) {

		return numberUtils.cosDegrees(radient);
	},

	/**
	 * Returns the min decimal places of the given numbers.
	 */
	minDecimalPlaces: function(numbers) {

		return numberUtils.minDecimalPlaces(numbers);
	}

}

module.exports.units = {

	/** Converts the given tons to milligramms */
	convertTons2Milligramms: function(tons) {
		return units.convertTons2Milligramms(tons);
	},

	/** Converts the given kilograms to milligrams */
	convertKilograms2Milligramms: function(kilograms) {
		return units.convertKilograms2Milligramms(kilograms);
	},

	/** Converts the given grams to milligrams */
	convertGrams2Milligramms: function(grams) {
		return units.convertGrams2Milligramms(grams);
	},

	/** Converts the given days to seconds */
	convertDays2Seconds: function(days) {
		return units.convertDays2Seconds(days);
	},

	/** Converts the given days to seconds */
	convertDays2Seconds: function(days) {
		return units.convertDays2Seconds(days);
	},

	/**
	 * Converts the given hours to seconds.
	 */
	convertHours2Seconds: function(hours) {
		return units.convertHours2Seconds(hours);
	},

	/**
	 * Converts the given minutes to seconds.
	 */
	convertMinutes2Seconds: function(minutes) {
		return units.convertMinutes2Seconds(minutes);
	}
}

