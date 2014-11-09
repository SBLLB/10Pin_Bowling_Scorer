Game = function() {
	this.turnsLeft = 10;
	// Need Turns left? Use this.frameScores.length instead?
	this.totalGameScore = 0;
	this.frameScores = [];
	this.bonusPointsByFrame = [];
	this.strikeSpareTracker = [];
	this.flattenedFrameScore =[];
	this.totalFrameScore = 0;
	this.totalBonusPoints = 0;
};



Game.prototype.calculateTotalScore = function() {
	this._flattenFrameScoresArray();
	this._addUpFrameScores();
	this._addUpBonusPoints();
 	this.totalGameScore = this.totalFrameScore + this.totalBonusPoints;
};

// PRIVATE

Game.prototype._awardBonusPoints = function() {
	var index;
	var a = this.strikeSpareTracker;
	for (index = 0; index < a.length; ++index) {
    	if ((a[index]) === "no bonus") {
    		this.bonusPointsByFrame.push(0)
    	}
    	if ((a[index]) === "spare") {
    		this.bonusPointsByFrame.push(((this.frameScores[(index+1)][0])*2))
    	}
    	if ((a[index]) === "strike") {
    		this.bonusPointsByFrame.push(((this.frameScores[(index+1)][0])+(this.frameScores[(index+1)][1]))*2)
    	};
	};
};

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
	return (this.frameScores.length === 9)	
};






