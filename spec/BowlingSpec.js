
describe('A 10-pin bowling game', function() {

	beforeEach(function() {
			game = new Game;
			turn = new Turn(game);
		});

	describe('should be initialised with', function() {
		
		it('10 frames', function() {
			expect(game.turnsLeft).toEqual(10);
		});

		it('an accumulating score', function() {
			expect(game.totalGameScore).toEqual(0);
		});

	});

	describe('should know when', function() {


		it('you are playing the tenth frame', function() {
			game.frameScores = [[1,2], [4,5], [2,4], [10,0], [2,5], [3.6], [3,3], [2,2], [1,8]]
			game.turnsLeft = 0
			expect(game._isTenthFrame()).toEqual(true)
		});

		it('a frame yielded a strike', function() {
			turn.bowlOne(10)
			turn.recordScore()
			expect(game.strikeSpareTracker[0]).toEqual('strike')
		});

		it('a frame yielded a spare', function() {
			turn.bowlOne(1)
			turn.bowlTwo(9)
			turn.recordScore()
			expect(game.strikeSpareTracker[0]).toEqual('spare')
		});

		it('a frame yeilded no strike or spare', function() {
			turn.bowlOne(1)
			turn.bowlTwo(3)
			turn.recordScore()
			expect(game.strikeSpareTracker[0]).toEqual('no bonus')
		});

	});

});



