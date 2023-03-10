const timeUnits = require('./time_units');
const massUnits = require('./mass_unit');
const statics = require('./statics');

module.exports = {
	
	/**
	 * Adds the passed parallel forces (forces with the same line of action)
	 * All forces need to be in the same scale
	 */
	addParallelForces: function(forces) {
		return statics.addParallelForces(forces);
	},
	
	/** Converts the given tons to milligramms */
	convertTons2Milligramms: function(tons){
		return massUnits.convertTons2Milligramms(tons);
	},
	
	/** Converts the given kilograms to milligrams */
	convertKilograms2Milligramms: function(kilograms){
		return massUnits.convertKilograms2Milligramms(kilograms);
	},
	
	/** Converts the given grams to milligrams */
	convertGrams2Milligramms: function(grams){
		return massUnits.convertGrams2Milligramms(grams);
	},
	
	/** Converts the given days to seconds */
	convertDays2Seconds: function(days) {
		return timeUnits.convertDays2Seconds(days);
	},

   /**
    * Converts the given hours to seconds.
	*/
	convertHours2Seconds: function(hours) {
		return timeUnits.convertHours2Seconds(hours);
	},

	/**
	 * Converts the given minutes to seconds.
	 */
	convertMinutes2Seconds: function(minutes) {
		return timeUnits.convertMinutes2Seconds(minutes);
	}
}