Game = function() {
	this.turnsLeft = 10;
	this.totalScore = 0;
	this.frameScores = {}

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
	this.scoreByBowl = [];

}; 

Turn.prototype.bowlOne = function(pinsKnockedDown) {
	this._pinsHit(pinsKnockedDown);
	this.bowlsMade += 1
};

Turn.prototype.bowlTwo = function(pinsKnockedDown) {
	if (this._isStrike()) {
		return undefined
	}
	this._pinsHit(pinsKnockedDown);
	this.bowlsMade += 1
};

// PRIVATE

Turn.prototype._isStrike = function() {
	return (this.bowlsMade === 1 && this.score === 10);
};

Turn.prototype._isSpare = function() {
	return (this.bowlsMade === 2 && this.score === 10);
};

Turn.prototype._pinsHit = function(pinsKnockedDown) {
	if (this.scoreByBowl.length >= 2) {
		return undefined
	}
	this.score += pinsKnockedDown;	
	this.scoreByBowl.push(pinsKnockedDown)
	this.pins -= pinsKnockedDown;
};

Turn.prototype._bowlOneScore = function(first_argument) {
	return this.scoreByBowl[0]
};

Turn.prototype._bowlTwoScore = function(first_argument) {
	return this.scoreByBowl[1]
};
