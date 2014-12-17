describe('To score a game of ten pin bowling', function() {

	beforeEach(function() {
		game = new Game;
	});


	describe('the Game should keep', function() {

		it('a running total score', function() {
			game.frameScores = [[2, 0], [5, 3], [2, 1]]
			game.frameBonusPoints = [0, 0, 0]
			game.calculateTotalScore()
			expect(game.totalGameScore).toEqual(13)
		});
		
		it('a running total score including the bonus points', function() {
			game.frameScores = [[10, 0], [5, 3], [2, 1]]
			game.frameBonusPoints = [8, 0, 0]
			game.calculateTotalScore()
			expect(game.totalGameScore).toEqual(29)
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
			expect(game.frameBonusPoints).toContain(4)
		});
		
	});

	describe('should be able to calculate', function() {
		it('a perfect game', function() {
			turn1.bowlOne(10)
			turn2.bowlOne(10)
			turn3.bowlOne(10)
			turn4.bowlOne(10)
			turn5.bowlOne(10)
			turn6.bowlOne(10)
			turn7.bowlOne(10)
			turn8.bowlOne(10)
			turn9.bowlOne(10)
			turn10.bowlOne(10)
			turn10.activateFinalFrameBonus()
			finalFrameBonus.bonusBowlOne(10)
			finalFrameBonus.bonusBowlTwo(10)

			turn1.recordBonusPoints()
			turn1.recordScore();
			turn2.recordBonusPoints()
			turn2.recordScore();
			turn3.recordBonusPoints()
			turn3.recordScore();
			turn4.recordBonusPoints()
			turn4.recordScore();
			turn5.recordBonusPoints()
			turn5.recordScore();
			turn6.recordBonusPoints()
			turn6.recordScore();
			turn7.recordBonusPoints()
			turn7.recordScore();
			turn8.recordBonusPoints()
			turn8.recordScore();
			turn9.recordBonusPoints()
			turn9.recordScore();
			turn10.recordBonusPoints()
			turn10.recordScore();

			game.calculateTotalScore();
			expect(game.totalGameScore).toEqual(300);
		});

		it('a gutter game', function() {
			turn1.bowlOne(0);
			turn1.bowlTwo(0);
			turn2.bowlOne(0);
			turn2.bowlTwo(0);
			turn3.bowlOne(0);
			turn3.bowlTwo(0);
			turn4.bowlOne(0);
			turn4.bowlTwo(0);
			turn5.bowlOne(0);
			turn5.bowlTwo(0);
			turn6.bowlOne(0);
			turn6.bowlTwo(0);
			turn7.bowlOne(0);
			turn7.bowlTwo(0);
			turn8.bowlOne(0);
			turn8.bowlTwo(0);
			turn9.bowlOne(0);
			turn9.bowlTwo(0);
			turn10.bowlOne(0);
			turn10.bowlTwo(0);

			turn1.recordBonusPoints()
			turn1.recordScore();
			turn2.recordBonusPoints()
			turn2.recordScore();
			turn3.recordBonusPoints()
			turn3.recordScore();
			turn4.recordBonusPoints()
			turn4.recordScore();
			turn5.recordBonusPoints()
			turn5.recordScore();
			turn6.recordBonusPoints()
			turn6.recordScore();
			turn7.recordBonusPoints()
			turn7.recordScore();
			turn8.recordBonusPoints()
			turn8.recordScore();
			turn9.recordBonusPoints()
			turn9.recordScore();
			turn10.recordBonusPoints()
			turn10.recordScore();

			game.calculateTotalScore();
			expect(game.totalGameScore).toEqual(0);

		});
	});

});
