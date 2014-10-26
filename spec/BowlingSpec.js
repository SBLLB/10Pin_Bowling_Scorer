
describe('A Bowling', function() {

	describe('game should have', function() {
		
		it('10 frames', function() {
			game = new Game;
			expect(game.framesLeft).toEqual(10);
		});

	});

});

// describe('frame should have', function() {
	// 	// Two rolls
	// 	// Ten pins
	// 	// Pins from first roll remain for second roll
	// 	// If a strike, second go not required
		
	// });

	// describe('scoring', function() {
	// 	// Score per frame
	// 	// Rolling score
	// 	// Strikes
	// 	// Spares
	// 	// Gutter Game test
	// 	// Perfect game test
	// 	// 10th frame nuances
	// });