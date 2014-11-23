
describe('A 10-pin bowling game', function() {

	beforeEach(function() {
			game = new Game;
		});

	describe('should be initialised with', function() {
		
		it('10 turns left', function() {
			expect(game.turns.length).toEqual(10);
		});

		it('an accumulating score', function() {
			expect(game.totalGameScore).toEqual(0);
		});

	});

});



