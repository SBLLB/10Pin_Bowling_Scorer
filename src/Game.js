Game = function() {
	this.totalGameScore = 0;
	this.frameScores = [];
	this.frameBonusPoints = [];
	this.turns = [
		turn1 	= new Turn(this),
		turn2 	= new Turn(this),
		turn3 	= new Turn(this),
		turn4 	= new Turn(this),
		turn5 	= new Turn(this),
		turn6 	= new Turn(this),
		turn7 	= new Turn(this),
		turn8 	= new Turn(this),
		turn9 	= new Turn(this),
		turn10 	= new Turn(this)
	]
};

Game.prototype.calculateTotalScore = function() {
	this._flattenFrameScoresArray();
	this._addUpFrameScores();
	this._addUpBonusPoints();
 	this.totalGameScore = this.totalFrameScore + this.totalBonusPoints;
};

// PRIVATE


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
	this.totalBonusPoints = this.frameBonusPoints.reduce(function(a, b) {
		return a + b
	});
};

Game.prototype._isTenthFrame = function() {
	return (this.turnsLeft === 0)	
};







