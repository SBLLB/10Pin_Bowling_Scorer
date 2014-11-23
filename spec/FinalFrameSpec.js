
describe('Tenth Frame: ', function() {

	beforeEach(function() {
			game = new Game;
		});


	describe('a Turn should know', function() {

		it('if it is the tenth frame', function() {
			expect(turn10._isFinalFrame()).toEqual(true)
		});

		it('if that tenth frame yielded a strike or spare', function() {
			turn10.score = 10
			expect(turn10._isStrikeOrSpare()).toEqual(true)
		})

		it('if the tenth frame did not yield a strike or spare', function() {
			turn10.score = 4
			expect(turn10._isStrikeOrSpare()).toEqual(false)
		});
	});

	describe('a bonus bowl should be allowed', function() {
		
		it('if the tenth frame yielded a strike', function() {
			turn10.score = 10
			turn10.scoreByFrame = [10,0]
			expect(turn10._isBonusBowlAllowed()).toEqual(true)
		});

		it('if the tenth frame yielded a spare', function() {
			turn10.score = 10
			turn10.scoreByFrame = [3,3]
			expect(turn10._isBonusBowlAllowed()).toEqual(true);
		});
	});

	describe('a second bonus bowl should', function() {
		
		it('be allowed if the tenth frame yielded a strike', function() {
			turn10.score = 10;
			turn10.scoreByBowl = [10,0];
			turn10.activateFinalFrameBonus();	
			expect(finalFrameBonus._isBonusBowlTwoAllowed()).toEqual(true);
		});

		it('NOT be allowed if the tenth frame yielded a spare', function() {
			turn10.score = 10;
			turn10.scoreByBowl = [9,1]; 
			turn10.activateFinalFrameBonus(); 		
			expect(finalFrameBonus._isBonusBowlTwoAllowed()).toEqual(false); 
		});

		it('should reset the pins if first bonus bowl is a strike', function() {
			finalFrameBonus = new FinalFrameBonus;
			finalFrameBonus.bonusBowlOne(10);
			finalFrameBonus.bonusBowlTwo(2);
			expect(finalFrameBonus.pinsStanding).toEqual(8)
		})

	});

	describe ('when a final frame is a ', function() {

		it('strike or spare, a bonus bowl should be created ', function() {
			turn10.score = 10
			turn10.activateFinalFrameBonus()
			expect(finalFrameBonus.turn).toEqual(turn10)
		})

		it('spare, the points of the first bonus bowl should be awarded to the 10th frame', function() {
			turn10.score = 10
			turn10.scoreByBowl = [2,8]
			turn10.activateFinalFrameBonus()		
			finalFrameBonus.bonusBowlOne(5)
			turn10.recordBonusPoints()
			expect(turn10.bonusPoints).toEqual(5)
		})

		it('strike, the points of the both bonus bowl should be awarded to the 10th frame', function() {
			turn10.score = 10
			turn10.scoreByBowl = [10, 0]
			turn10.activateFinalFrameBonus()		
			finalFrameBonus.bonusBowlOne(5)
			finalFrameBonus.bonusBowlOne(5)
			turn10.recordBonusPoints()
			expect(turn10.bonusPoints).toEqual(10)
		})
	})

	describe ('when a final frame is NOT a strike or spare', function() {

		it('a bonus bowl should not be created ', function() {
			turn10.score = 8;
			expect(turn10.activateFinalFrameBonus()).toEqual('No bonus allowed. End of game.')
		})
	})

});