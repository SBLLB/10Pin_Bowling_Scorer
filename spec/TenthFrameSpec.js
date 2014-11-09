
describe('Tenth Frame bonus bowls', function() {

	beforeEach(function() {
			game = new Game;
			turn = new Turn(game);
		});


	describe('a Turn should know a bonus bowl', function() {

		it('is not allowed by default', function() {
			expect(turn._isBonusBowlAllowed()).toEqual(false)
		});
	});

});