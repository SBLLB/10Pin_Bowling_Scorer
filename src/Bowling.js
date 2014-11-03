Game = function() {
	this.turnsLeft = 10;
	this.totalScore = 0;
	this.frameScores = [];
	this.bonusPointsByFrame = [];
	this.strikeSpareTracker = [];
};

Game.prototype.isTenthFrame = function() {
	return (this.turnsLeft === 0)	
};

Game.prototype._calculateTotalScore = function() {
	var flattened = this.frameScores.reduce(function(a, b) {
		return a.concat(b)
	});
	this.totalScore = flattened.reduce(function(a, b) {
		return a + b
	});
};

// var flattened_scores = function() {
// 		scores.reduce(function(a, b) {
// 			return a.concat(b)
// 		};
// 	};

// Game.prototype.calculateTotalScore = function(scores) {
	
// 	flattened_scores.reduce(function() {
// 		return a + b
// 	}
// 	};
// };


Turn = function() {
	this.bowlsMade = 0 
	this.pinsStanding = 10;
	this.score = 0;
	this.scoreByBowl = [];
	this.game = game;
}; 

Turn.prototype.bowlOne = function(pinsDown) {
	this._scorePinsHit(pinsDown);
	this.bowlsMade += 1
};

Turn.prototype.bowlTwo = function(pinsDown) {
	if (this._bonus() === "strike") {
		this.scoreByBowl.push(0)
	}
	this._scorePinsHit(pinsDown);
	this.bowlsMade += 1
};

Turn.prototype.recordScore = function() {
	this.game.frameScores.push(this.scoreByBowl)
	this.game.strikeSpareTracker.push(this._bonus())
};


// PRIVATE


Turn.prototype._bonus = function() {
	if (this.score === 10) {
		if (this.scoreByBowl[0] === 10) {
		return "strike" 
		}
		else return "spare"
	}
	else return "no bonus" 
};


Turn.prototype._scorePinsHit = function(pinsDown) {
	if (this.scoreByBowl.length >= 2) {
		return undefined
	}
	this.score += pinsDown;	
	this.scoreByBowl.push(pinsDown)
	this.pinsStanding -= pinsDown;
};

Turn.prototype._bowlOneScore = function() {
	return this.scoreByBowl[0]
};

Turn.prototype._bowlTwoScore = function() {
	return this.scoreByBowl[1]
};




