
Turn = function() {
	this.bowlsMade = 0 
	this.pinsStanding = 10;
	this.score = 0;
	this.scoreByBowl = [];
	this.game = game;
}; 

Turn.prototype.bowlOne = function(pinsDown) {
	this._scorePinsHit(pinsDown);
	this.bowlsMade += 1
};

Turn.prototype.bowlTwo = function(pinsDown) {
	if (this._isStrike()) {
		this.scoreByBowl.push(0)
	}
	this._scorePinsHit(pinsDown);
	this.bowlsMade += 1
};

Turn.prototype.recordScore = function() {
	this.game.frameScores.push(this.scoreByBowl)
	this.game.strikeSpareTracker.push(this._bonus())
};


// PRIVATE


Turn.prototype._bonus = function() {
	if (this._isStrikeOrSpare()) {
		if (this._isStrike()) {
			return "strike" 
		}
		else return "spare"
	}
	else return "no bonus" 
};

Turn.prototype._isStrikeOrSpare = function() {
	return (this.score === 10)
};

Turn.prototype._isStrike = function() {
	return (this.scoreByBowl[0] === 10)
};

Turn.prototype._scorePinsHit = function(pinsDown) {
	if (this._noMoreBowlsAllowed()) {
		return undefined
	}
	this.score += pinsDown;	
	this.scoreByBowl.push(pinsDown)
	this.pinsStanding -= pinsDown;
};


Turn.prototype._noMoreBowlsAllowed = function() {
	return (this.scoreByBowl.length >= 2)
};

