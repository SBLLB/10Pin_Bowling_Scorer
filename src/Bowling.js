Game = function() {
	this.turnsLeft = 10;
	this.totalScore = 0;
};


Turn = function() {
	this.rolls = 2;
	this.pins = 10;
	this.score = 0;
}; 

Turn.prototype.pinsHit = function(pinsKnockedDown) {
	this.score += pinsKnockedDown;	
};