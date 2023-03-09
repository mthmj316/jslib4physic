const quantities_and_units = require('./content/quantities_and_units/quantities_and_units_main')

module.exports = {

	getBaseQuantities: function(){
		return quantities_and_units.getBaseQuantities();
	}
} 

