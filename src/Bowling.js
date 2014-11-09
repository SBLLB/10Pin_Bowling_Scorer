Game = function() {
	this.turnsLeft = 10;
	this.totalGameScore = 0;
	this.frameScores = [];
	this.bonusPointsByFrame = [];
	this.strikeSpareTracker = [];
	this.flattenedFrameScore =[];
	this.totalFrameScore = 0;
	this.totalBonusScore = 0;
};



Game.prototype._calculateTotalScore = function() {
	this.flattenedFrameScore = this.frameScores.reduce(function(a, b) {
		return a.concat(b)
	});

	this.totalFrameScore = this.flattenedFrameScore.reduce(function(a, b) {
		return a + b
	});

	this.totalBonusScore = this.bonusPointsByFrame.reduce(function(a, b) {
		return a + b
	});

 	this.totalGameScore = this.totalFrameScore + this.totalBonusScore
};

// PRIVATE


Game.prototype._isTenthFrame = function() {
	return (this.turnsLeft === 0)	
};

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






