
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

	describe('if strike or spare in final frame a bonus bowl should be awarded', function() {
		
		it('if the tenth frame yielded a strike', function() {
			turn10.score = 10
			turn10.scoreByFrame = [10,0]
			expect(turn10._isBonusBowl()).toEqual(true)
		});
	});

});