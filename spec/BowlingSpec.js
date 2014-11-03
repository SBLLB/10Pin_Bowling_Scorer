
describe('A 10-pin bowling', function() {

	beforeEach(function() {
			game = new Game;
			turn = new Turn(game);
		});

	describe('game should', function() {
		
		it('have 10 frames', function() {
			expect(game.turnsLeft).toEqual(10);
		});

		it('have an accumulating score', function() {
			expect(game.totalScore).toEqual(0);
		});

		it('know when you are playing the tenth frame', function() {
			game.turnsLeft = 0
			expect(game.isTenthFrame()).toEqual(true)
		});

		it('keep score of strikes', function() {
			turn.bowlOne(10)
			turn.recordScore()
			expect(game.strikeSpareTracker[0]).toEqual('strike')
		});
		it('keep score of spares', function() {
			turn.bowlOne(1)
			turn.bowlTwo(9)
			turn.recordScore()
			expect(game.strikeSpareTracker[0]).toEqual('spare')
		});

	});


	describe('turn/frame should', function() {

		it('allow two possible rolls', function() {
			expect(turn.rollsAvailable).toEqual(2);
		});

		it('know when one roll has been taken', function() {
			turn.bowlOne(5);
			expect(turn.bowlsMade).toEqual(1);
		});

		it('know when both rolls have been taken', function() {
			turn.bowlOne(2);
			turn.bowlTwo(2);
			expect(turn.bowlsMade).toEqual(2);
		});

		it('have ten pins', function() {
			expect(turn.pins).toEqual(10);
		});

		it('keep a turn/frame score', function() {
			expect(turn.score).toEqual(0);
		});

		it('add the number of pins hit in first bowl to the score', function() {
			turn.bowlOne(5)
			expect(turn.score).toEqual(5);
		});

		it('know when there has been a strike', function() {
			turn.bowlOne(10)
			expect(turn._StrikeOrSpare()).toEqual("strike")
		});

		it('know when there has been a spare', function() {
			turn.bowlOne(9)
			turn.bowlTwo(1)
			expect(turn._StrikeOrSpare()).toEqual("spare")
		});

		it('reset standing pins only after first roll', function() {
			turn.bowlOne(9)
			expect(turn.pins).toEqual(1)
		});

		it('not allow a second roll if first is a strike', function() {
			turn.bowlOne(10)
			turn.bowlTwo()
			expect(turn.scoreByBowl).toEqual([10, 0])
		});

		it('not get confused between a spare and strike', function() {
			turn.bowlOne(1)
			turn.bowlTwo(9)
			expect(turn._StrikeOrSpare()).toEqual("spare")
		});
			

		it('the first bowl of a frame', function() {
			turn.bowlOne(6)
			turn.bowlTwo(2)
			expect(turn._bowlOneScore()).toEqual(6)
		});

		it('the first bowl of a frame', function() {
			turn.bowlOne(6)
			turn.bowlTwo(2)
			expect(turn._bowlTwoScore()).toEqual(2)
		});

		it('the total score of a frame', function() {
			turn.bowlOne(6)
			turn.bowlTwo(2)
			expect(turn.score).toEqual(8)
		});

		it('append frame scores to game tally', function(){
			turn.bowlOne(6)
			turn.bowlTwo(2)
			turn.recordScore()
			expect(game.frameScores).toContain([6, 2])
		});


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