module.exports = {

	/** Converts the given days to seconds */
	convertDays2Seconds: function(days) {
		return this.convertHours2Seconds(days * 24);
	},

   /**
    * Converts the given hours to seconds.
	*/
	convertHours2Seconds: function(hours) {
		return this.convertMinutes2Seconds(hours * 60);
	},

	/**
	 * Converts the given minutes to seconds.
	 */
	convertMinutes2Seconds: function(minutes) {
		return minutes * 60;
	},
	
		/** Converts the given tons to milligramms */
	convertTons2Milligramms: function(tons){
		return this.convertKilograms2Milligramms(tons * 1000);
	},
	
	/** Converts the given kilograms to milligrams */
	convertKilograms2Milligramms: function(kilograms){
		return this.convertGrams2Milligramms(kilograms * 1000);
	},
	
	/** Converts the given grams to milligrams */
	convertGrams2Milligramms: function(grams){
		return grams * 1000;
	}
}