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
	}
}