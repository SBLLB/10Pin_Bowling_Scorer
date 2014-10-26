
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


	describe('each turn/frame should', function() {

		beforeEach(function() {
			turn = new Turn;
		});

		it('allow two possible rolls', function() {
			expect(turn.rolls).toEqual(2);
		});

		it('have ten pins', function() {
			expect(turn.pins).toEqual(10);
		});

		it('keep a turn/frame score', function() {
			expect(turn.score).toEqual(0);
		});

		it('add pins hit to the score', function() {
			turn.pinsHit(5)
			expect(turn.score).toEqual(5);
		});



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