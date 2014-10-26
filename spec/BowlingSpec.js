
describe('When playing 10-pin bowling', function() {

	describe('a game should have', function() {

		beforeEach(function() {
		game = new Game;
		});
		
		it('10 frames', function() {
			expect(game.turnsLeft).toEqual(10);
		});

		it('an accumulating score', function() {
			expect(game.totalScore).toEqual(0);
		});

	});


	describe('each turn should have', function() {

		beforeEach(function() {
			turn = new Turn;
		});

		it('two possible rolls', function() {
			expect(turn.rolls).toEqual(2);
		});

		it('ten pins', function() {
			expect(turn.pins).toEqual(10);
		});

		// Two rolls
		// 	// Ten pins
		// 	// Pins from first roll remain for second roll
		// 	// If a strike, second go not required
			
	});

});



	// describe('scoring', function() {
	// 	// Score per frame
	// 	// Rolling score
	// 	// Strikes
	// 	// Spares
	// 	// Gutter Game test
	// 	// Perfect game test
	// 	// 10th frame nuances
	// });