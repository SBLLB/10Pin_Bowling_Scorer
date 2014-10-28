Game = function() {
	this.turnsLeft = 10;
	this.totalScore = 0;

	// Bonus? Applicable
};

Game.prototype.isTenthFrame = function() {
	return (this.turnsLeft === 0)	
};


Turn = function() {
	this.rollsAvailable = 2;
	this.bowlsMade = 0 
	this.pins = 10;
	this.score = 0;

}; 


Turn.prototype.bowlOne = function(pinsKnockedDown) {
	this._pinsHit(pinsKnockedDown);
	this.bowlsMade += 1

};

Turn.prototype.bowlTwo = function(pinsKnockedDown) {
	if (this.isStrike()) {
		return 
	}
	this._pinsHit(pinsKnockedDown);
	this.bowlsMade += 1

};

Turn.prototype.isStrike = function() {
	return (this.bowlsMade === 1 && this.score === 10);
};

Turn.prototype.isSpare = function() {
	return (this.bowlsMade === 2 && this.score === 10);
};

// PRIVATE

Turn.prototype._pinsHit = function(pinsKnockedDown) {
	this.score += pinsKnockedDown;	
	this.pins -= pinsKnockedDown;
};
