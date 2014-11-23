
Turn = function(game) {
	this.pinsStanding = 10;
	this.score = 0;
	this.scoreByBowl = [];
	this.bonusPoints = 0
	this.game = game;
}; 

Turn.prototype.bowlOne = function(pinsDown) {
	this._scorePinsHit(pinsDown);
};

Turn.prototype.bowlTwo = function(pinsDown) {
	this._scorePinsHit(pinsDown);
};

Turn.prototype.recordScore = function() {
	this.game.frameScores.push(this.scoreByBowl)
	this.game.bonusPointsByFrame.push(this.bonusPoints)
};

Turn.prototype.recordBonusPoints = function() {
	if (this._isStrike()) {
		this.bonusPoints = this._nextFrameBothBowls() * 2
	} 
	else if (this._isSpare()) {
		this.bonusPoints = this._nextFrameFirstBowl() * 2
	}
	else {
		this.bonusPoints = 0
	}
};


// PRIVATE

Turn.prototype._nextFrameNumber = function() {
	return (this.game.turns.indexOf(this) + 1)
};

Turn.prototype._nextFrameFirstBowl = function() {
	i = this._nextFrameNumber();
	return this.game.turns[i].scoreByBowl[0]	
};

Turn.prototype._nextFrameBothBowls = function() {
	i = this._nextFrameNumber();
	return this.game.turns[i].score	
};

Turn.prototype._isStrikeOrSpare = function() {
	return (this.score  === 10)
};

Turn.prototype._isStrike = function() {
	return (this.scoreByBowl[0] === 10)
};

Turn.prototype._isSpare = function () {
	return (this._isStrikeOrSpare() && !this._isStrike());
}

Turn.prototype._scorePinsHit = function(pinsDown) {
	if (this._isStrike()) {
		this.scoreByBowl.push(0)
		// awardZeroForSecondBowl
	}
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


