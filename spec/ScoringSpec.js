describe('To score a game of ten pin bowling', function() {

	beforeEach(function() {
		game = new Game;
	});


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
			turn1.bowlOne(6)
			turn1.bowlTwo(2)
			expect(turn1.scoreByBowl).toEqual([6,2])
		});

		it('the first bowl score', function() {
			turn1.bowlOne(6)
			turn1.bowlTwo(2)
			expect(turn1.scoreByBowl[0]).toEqual(6)
		});

		it('the second bowl score', function() {
			turn1.bowlOne(6)
			turn1.bowlTwo(2)
			expect(turn1.scoreByBowl[1]).toEqual(2)
		});

	});

	describe('the Turn must update the Game score', function() {	

		it('by appending frame scores to game tally', function(){
			turn1.bowlOne(6);
			turn1.bowlTwo(2);
			turn1.recordScore();
			expect(game.frameScores).toContain([6, 2])
		});

		it('by appending frame bonus scores to game tally', function(){
			turn1.bowlOne(6);
			turn1.bowlTwo(4);
			turn1.bonusPoints = 4;
			turn1.recordScore();
			expect(game.bonusPointsByFrame).toContain(4)
		});
		
	});

});
