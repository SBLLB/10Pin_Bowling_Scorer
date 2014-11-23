FinalFrameBonus = function(turn) {
	this.turn = turn;
	this.totalBonusScore = 0;
	this.pinsStanding = 10;
	this.bonusBowlScoreByBowl = [];
}; 


FinalFrameBonus.prototype.bonusBowlOne = function(pins_down) {
	this._scorePinsHit(pins_down);
};


FinalFrameBonus.prototype.bonusBowlTwo = function(pins_down) {
	this._resetPinsIfStrike();
	this._scorePinsHit(pins_down);
};

FinalFrameBonus.prototype._isBonusBowlTwoAllowed = function() {
	return (this.turn._isStrike());
};

// PRIVATE


FinalFrameBonus.prototype._scorePinsHit = function(pins_down) {
	this.bonusBowlScoreByBowl.push(pins_down);
	this.pinsStanding -= pins_down;
	this.totalBonusScore = this.totalBonusScore + pins_down;
};

FinalFrameBonus.prototype._resetPinsIfStrike = function() {
	if (this.bonusBowlScoreByBowl[0] === 10) {
		this.pinsStanding = 10
	}
};

FinalFrameBonus.prototype._bothBonusBowlsScore = function() {
	this.bonusBowlScoreByBowl.reduce(function(a, b) {
		return a + b
	});
};

