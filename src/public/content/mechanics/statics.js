module.exports = {
	
	/**
	 * Adds the passed parallel forces (forces with the same line of action)
	 * All forces need to be in the same scale
	 */
	addParallelForces: function(forces) {
		
		if (forces == null || forces.length == 0){
			return 0;
		}
		
		let sum = 0;
		
		forces.forEach((f) => sum = sum + f);
		
		return sum;
	}
}