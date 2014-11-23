Game = function() {
	this.totalGameScore = 0;
	this.frameScores = [];
	this.flattenedFrameScore =[];
	this.totalFrameScore = 0;
	this.totalBonusPoints = 0;
	this.bonusPointsByFrame = [];
	this.strikeSpareTracker = [];
	this.turnsLeft = 10;

	this.turns = [
		turn1 	= new Turn(this),
		turn2 	= new Turn(this),
		turn3 	= new Turn(this),
		turn4 	= new Turn(this),
		turn5 	= new Turn(this),
		turn6 	= new Turn(this),
		turn7 	= new Turn(this),
		turn8 	= new Turn(this),
		turn9 	= new Turn(this)
	]
};

Game.prototype.calculateTotalScore = function() {
	this._flattenFrameScoresArray();
	this._addUpFrameScores();
	this._addUpBonusPoints();
 	this.totalGameScore = this.totalFrameScore + this.totalBonusPoints;
};

// Game.prototype.isTenthFrameBonusBowlOne = function() {
// 	return (this._isTenthFrame() && this._isLastBowlAStrikeOrSpare())
// };

// PRIVATE

// Game.prototype._awardBonusPoints = function() {
// 	var index;
// 	var a = this.strikeSpareTracker;
// 	for (index = 0; index < a.length; ++index) {
//     	if ((a[index]) === "no bonus") {
//     		this.bonusPointsByFrame.push(0)
//     	}
//     	else if ((a[index]) === "spare") {
//     		this.bonusPointsByFrame.push(((this.frameScores[(index+1)][0])*2))
//     	}
//     	else 
//     		// ((a[index]) === "strike") 
//     	{
//     		this.bonusPointsByFrame.push(((this.frameScores[(index+1)][0])+(this.frameScores[(index+1)][1]))*2)
//     	};
// 	};
// };

Game.prototype._flattenFrameScoresArray = function() {
	this.flattenedFrameScore = this.frameScores.reduce(function(a, b) {
		return a.concat(b)
	});
};

Game.prototype._addUpFrameScores = function() {
	this.totalFrameScore = this.flattenedFrameScore.reduce(function(a, b) {
		return a + b
	});
};

Game.prototype._addUpBonusPoints = function() {
	this.totalBonusPoints = this.bonusPointsByFrame.reduce(function(a, b) {
		return a + b
	});
};

Game.prototype._isTenthFrame = function() {
	// return (this.frameScores.length === 9)	
	return (this.turnsLeft === 0)	
};

Game.prototype._isLastBowlAStrikeOrSpare = function() {
	return (this.strikeSpareTracker[-1] !== "no bonus")
};






