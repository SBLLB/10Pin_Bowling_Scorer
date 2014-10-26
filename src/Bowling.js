Game = function() {
	this.turnsLeft = 10;
	this.totalScore = 0;

	// Bonus? Applicable
};


Turn = function() {
	this.rollsAvailable = 2;
	this.rollsTaken = 0 
	this.pins = 10;
	this.score = 0;

}; 


Turn.prototype.rollTaken = function(pinsKnockedDown) {
	this._pinsHit(pinsKnockedDown);
	this.rollsTaken += 1

};

// PRIVATE

Turn.prototype._pinsHit = function(pinsKnockedDown) {
	this.score += pinsKnockedDown;	
};
