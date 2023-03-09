const quantitiesAndUnits = require('./content/quantities_and_units/quantities_and_units_main')
const mechanics = require('./content/mechanics/mechanics');

module.exports = {
	
	/** Converts the given tons to milligramms */
	convertTons2Milligramms: function(tons){
		return mechanics.convertTons2Milligramms(tons);
	},
	
	/** Converts the given kilograms to milligrams */
	convertKilograms2Milligramms: function(kilograms){
		return mechanics.convertKilograms2Milligramms(kilograms);
	},
	
	/** Converts the given grams to milligrams */
	convertGrams2Milligramms: function(grams){
		return mechanics.convertGrams2Milligramms(grams);
	},
	
	/** Converts the given days to seconds */
	convertDays2Seconds: function(days) {
		return mechanics.convertDays2Seconds(days);
	},
	
	/** Converts the given days to seconds */
	convertDays2Seconds: function(days) {
		return mechanics.convertDays2Seconds(days);
	},

   /**
    * Converts the given hours to seconds.
	*/
	convertHours2Seconds: function(hours) {
		return mechanics.convertHours2Seconds(hours);
	},

	/**
	 * Converts the given minutes to seconds.
	 */
	convertMinutes2Seconds: function(minutes) {
		return mechanics.convertMinutes2Seconds(minutes);
	},

	getBaseQuantities: function(){
		return quantitiesAndUnits.getBaseQuantities();
	}
} 

