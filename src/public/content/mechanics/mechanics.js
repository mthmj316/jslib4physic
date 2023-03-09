const timeUnit = require('./time_units')

module.exports = {
	
	/** Converts the given days to seconds */
	convertDays2Seconds: function(days) {
		return timeUnit.convertDays2Seconds(days);
	},

   /**
    * Converts the given hours to seconds.
	*/
	convertHours2Seconds: function(hours) {
		return timeUnit.convertHours2Seconds(hours);
	},

	/**
	 * Converts the given minutes to seconds.
	 */
	convertMinutes2Seconds: function(minutes) {
		return timeUnit.convertMinutes2Seconds(minutes);
	}
}