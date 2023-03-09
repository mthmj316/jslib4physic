module.exports = {
	
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