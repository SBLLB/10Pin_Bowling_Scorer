FinalFrameBonus = function(turn) {
	this.turn = turn;
	this.bonusBowlscoreByBowl = [];
}; 


FinalFrameBonus.prototype.bonusBowlOne = function(pins_down) {
	this.bonusBowlscoreByBowl.push(pins_down)
};


FinalFrameBonus.prototype.bonusBowlTwo = function(pins_down) {
	this.bonusBowlscoreByBowl.push(pins_down)
};

FinalFrameBonus.prototype.recordBonusFrameScore = function() {
	this.turn.bonusPoints = this.bonusBowlOneScore + this.bonusBowlTwoScore;
};

// Only allow bonus bowl two if Strike in tenth frame. 
// if strike. reset all pins?