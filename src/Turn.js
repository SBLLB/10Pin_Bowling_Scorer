
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
	this._recordFrameScoreToGame();
	this._recordBonusScoreToGame();
	
};

Turn.prototype.recordBonusPoints = function() {
	if (this._isStrike()) {
		this._awardDoubleNextFrame();
	} 
	if (this._isSpare()) {
		this._awardDoubleFirstBowlOfNextFrame();
	}
};


// PRIVATE

Turn.prototype._scorePinsHit = function(pinsDown) {
	if (this._isStrike()) {
		this._recordZeroForSecondBowl();
	}
	if (this._noMoreBowlsAllowed()) {
		return undefined
	}
	this.score += pinsDown;	
	this.scoreByBowl.push(pinsDown)
	this.pinsStanding -= pinsDown;
};

Turn.prototype._recordFrameScoreToGame = function() {
	this.game.frameScores.push(this.scoreByBowl)
};

Turn.prototype._recordBonusScoreToGame = function() {
	this.game.frameBonusPoints.push(this.bonusPoints)
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

Turn.prototype._noMoreBowlsAllowed = function() {
	return (this.scoreByBowl.length >= 2)
};

Turn.prototype._recordZeroForSecondBowl = function() {
	this.scoreByBowl.push(0)
};

Turn.prototype._awardDoubleNextFrame = function() {
	this.bonusPoints = this._nextFrameBothBowls() * 2
};

Turn.prototype._awardDoubleFirstBowlOfNextFrame = function() {
	this.bonusPoints = this._nextFrameFirstBowl() * 2.
};


