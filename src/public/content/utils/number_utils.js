module.exports = {

	/**
	 * Returns for the given angle the cos value.
	 * 
	 * If aangle is not a valid number an Error will be thrown.
	 */
	cosDegrees: function(angle) {

		if (!this.isNumber(angle)) {
			throw new Error("angle '" + angle + "' is not a number!")
		}
		
		let cos = Math.cos(angle / 180 * Math.PI);

		return parseFloat(cos.toFixed(15));
	},

	/** Returns true if the given num is actually a number
	 *  otherwise false
	 */
	isNumber: function(num) {

		if (typeof (num) === 'number') {
			// Yes, is a number.
			return true;
		}

		//No, is not a number.
		return false;
	},

	//	/** 
	//	 * Returns true if num is null, undefined or zero.
	//	 * Otherwise false will be returned.
	//	 */
	//	isNullOrZero: function(num) {
	//
	//		if (num == null || num === 0) {
	//			return true;
	//		}
	//
	//		return false;
	//	},
	//
	//	/** Returns true if all numbers are null or zero */
	//	areAllNullOrZero: function(nums) {
	//
	//		for (const num of nums) {
	//			if (!this.isNullOrZero(num)) {
	//				return false;
	//			}
	//		}
	//
	//		return true;
	//	},
	//
	//	/** Returns true if at least one number is null or zero */
	//	isOneNullOrZero: function(nums) {
	//
	//		for (const num of nums) {
	//			if (this.isNullOrZero(num)) {
	//				return true;
	//			}
	//		}
	//
	//		return false;
	//	},

	/**
	 * Returns the min decimal places of the given numbers.
	 * 
	 * Number can contain real numbers or string-numbers.
	 * 
	 * Be aware that real number with zeros only after decimal will lose those zeros. 
	 */
	minDecimalPlaces: function(numbers) {

		//Contains the minimal decimal places
		let mdps = 0;

		let isFirst = true;

		for (const num of numbers) {

			const sNum = num.toString();

			let decimalPlaces = 0;

			if (sNum.indexOf('.') > -1) {

				decimalPlaces = sNum.split('.')[1].length;
			}

			if (isFirst || decimalPlaces < mdps) {
				mdps = decimalPlaces;
			}

			isFirst = false;
		}

		return mdps;
	}
}