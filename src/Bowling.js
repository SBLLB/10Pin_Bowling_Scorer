Game = function() {
	this.turnsLeft = 10;
	this.totalScore = 0;
	this.frameScores = [];
	this.strikeSpareTracker = [];

};

Game.prototype.isTenthFrame = function() {
	return (this.turnsLeft === 0)	
};

// is last frame? if framesScores[9] = 10 

Turn = function() {
	this.rollsAvailable = 2;
	this.bowlsMade = 0 
	this.pins = 10;
	this.score = 0;
	this.scoreByBowl = [];
	this.game = game;
}; 

Turn.prototype.bowlOne = function(pinsKnockedDown) {
	this._pinsHit(pinsKnockedDown);
	this.bowlsMade += 1
};

Turn.prototype.bowlTwo = function(pinsKnockedDown) {
	if (this._StrikeOrSpare() === "strike") {
		this.scoreByBowl.push(0)
	}
	this._pinsHit(pinsKnockedDown);
	this.bowlsMade += 1
};

Turn.prototype.recordScore = function() {
	this.game.frameScores.push(this.scoreByBowl)
	this.game.strikeSpareTracker.push(this._StrikeOrSpare())
};


// PRIVATE

Turn.prototype._isBonus = function() {
	return (this.score === 10);
};

Turn.prototype._StrikeOrSpare = function() {
	if (this.score === 10) {
		if (this.scoreByBowl[0] === 10) {
		return "strike" 
		}
		else return "spare"
	}
	else return "no bonus" 
};

// Turn.prototype._isStrike = function() {
// 	return (this._StrikeOrSpare === "strike")
// };

// Turn.prototype._isSpare = function() {
// 	return (this._StrikeOrSpare === "spare")
// };



Turn.prototype._pinsHit = function(pinsKnockedDown) {
	if (this.scoreByBowl.length >= 2) {
		return undefined
	}
	this.score += pinsKnockedDown;	
	this.scoreByBowl.push(pinsKnockedDown)
	this.pins -= pinsKnockedDown;
};

Turn.prototype._bowlOneScore = function() {
	return this.scoreByBowl[0]
};

Turn.prototype._bowlTwoScore = function() {
	return this.scoreByBowl[1]
};




