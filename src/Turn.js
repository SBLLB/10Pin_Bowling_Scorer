
Turn = function(game) {
	this.pinsStanding = 10;
	this.score = 0;
	this.scoreByBowl = [];
	this.bonusPoints = 0
	this.game = game;
	this.whatFrame = this;
}; 

Turn.prototype.bowlOne = function(pinsDown) {
	this._scorePinsHit(pinsDown);
};

Turn.prototype.bowlTwo = function(pinsDown) {
	this._scorePinsHit(pinsDown);
};

Turn.prototype.recordScore = function() {
	this._sendFrameScoreToGame();
	this._sendBonusScoreToGame();
	
};

Turn.prototype.recordBonusPoints = function() {
	if (this._isStrike()) {
		this._awardBonusOfNextTwoBowls();
	} 
	if (this._isSpare()) {
		this._awardBonusOfNextBowl();
	}
};

Turn.prototype.activateFinalFrameBonus = function() {
	if (this._isBonusBowlAllowed()) {
		finalFrameBonus = new FinalFrameBonus(this)
	}
	else 
		return "No bonus allowed. End of game."
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

Turn.prototype._sendFrameScoreToGame = function() {
	this.game.frameScores.push(this.scoreByBowl)
};

Turn.prototype._sendBonusScoreToGame = function() {
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

Turn.prototype._nextTwoBowls = function() {
	f1 = this._nextFrameNumber();
	f2 = this._nextFrameNumber() + 1;
	if (this.game.turns[f1]._isStrike()) {
		if(this.game.turns[f1].whatFrame === turn10) {
			return this.game.turns[f1].score + finalFrameBonus.bonusBowlScoreByBowl[0]
		}
		else {
			return this.game.turns[f1].score + this.game.turns[f2].scoreByBowl[0];
		}
	}
	else return this.game.turns[f1].score	
};

Turn.prototype._noMoreBowlsAllowed = function() {
	return (this.scoreByBowl.length >= 2)
};

Turn.prototype._recordZeroForSecondBowl = function() {
	this.scoreByBowl.push(0)
};

Turn.prototype._awardBonusOfNextTwoBowls = function() {
	if (this._isFinalFrame()) {
		this.bonusPoints = this._BonusBowlScore()
	}
	else this.bonusPoints = this._nextTwoBowls() 
};

Turn.prototype._awardBonusOfNextBowl = function() {
	if (this._isFinalFrame()) {
		this.bonusPoints = this._BonusBowlScore()
	}
	else this.bonusPoints = this._nextFrameFirstBowl()
};

Turn.prototype._isFinalFrame = function() {
	return (this === turn10)
};

Turn.prototype._isBonusBowlAllowed = function() {
	return (this._isFinalFrame() && this._isStrikeOrSpare()) 
};

Turn.prototype._BonusBowlScore = function() {
	return finalFrameBonus.totalBonusScore;
};

// Turn.prototype._bothBonusBowlsScore = function() {
// 	return finalFrameBonus.totalBonusScore;
// };

