/*
Length	Meter	m
Mass	Kilogram	kg
Time	Second	s
Electric current	Ampere	a
Temperature	Kelvin	k
Amount of substance	Mole	mol
Luminous intensity
*/

module.exports = {
	
	getBaseQuantities: function(){
		return Object.freeze(['length', 'time', 'mass',
		 'temperature', 'current', 'amount of substance', 'light intensity']);
	}
}
