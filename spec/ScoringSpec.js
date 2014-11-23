describe('To score a game of ten pin bowling', function() {

	beforeEach(function() {
		game = new Game;
		turn = new Turn(game);
	});

	// describe('the Game should calculate bonus points', function() {

	// 	it('awarding a bonus of double the next bowl if a spare', function() {
	// 		game.frameScores = [[2, 8], [5, 3]];
	// 		game.strikeSpareTracker = ["spare", "no bonus"];
	// 		game._awardBonusPoints()
	// 		expect(game.bonusPointsByFrame[0]).toEqual(10)
	// 	});

	// 	it('awarding a bonus of double the next frame if a strike', function() {
	// 		game.frameScores = [[10, 0], [5, 3]];
	// 		game.strikeSpareTracker = ["strike", "no bonus"];
	// 		game._awardBonusPoints()
	// 		expect(game.bonusPointsByFrame[0]).toEqual(16)
	// 	});

	// });

	describe('the Game should keep', function() {

		it('a running total score', function() {
			game.frameScores = [[2, 0], [5, 3], [2, 1]]
			game.bonusPointsByFrame = [0, 0, 0]
			game.calculateTotalScore()
			expect(game.totalGameScore).toEqual(13)
		});
		
		it('a running total score including the bonus points', function() {
			game.frameScores = [[10, 0], [5, 3], [2, 1]]
			game.bonusPointsByFrame = [16, 0, 0]
			game.calculateTotalScore()
			expect(game.totalGameScore).toEqual(37)
		});
	});

	describe('each Turn should keep record of', function() {	

		it('the total score of a frame', function() {
			turn.bowlOne(6)
			turn.bowlTwo(2)
			expect(turn.scoreByBowl).toEqual([6,2])
		});

		it('the first bowl score', function() {
			turn.bowlOne(6)
			turn.bowlTwo(2)
			expect(turn.scoreByBowl[0]).toEqual(6)
		});

		it('the second bowl score', function() {
			turn.bowlOne(6)
			turn.bowlTwo(2)
			expect(turn.scoreByBowl[1]).toEqual(2)
		});

	});

	describe('the Turn must update the Game score', function() {	

		it('by appending frame scores to game tally', function(){
			turn.bowlOne(6)
			turn.bowlTwo(2)
			turn.recordScore()
			expect(game.frameScores).toContain([6, 2])
		});
		
	});

});
