
describe('A turn in a 10-pin bowling game', function() {

	beforeEach(function() {
			game = new Game;
			turn = new Turn(game);
		});

	describe('has bowling pins.', function() {


		it('there should be ten pins when a turns initialised', function() {
			expect(turn.pinsStanding).toEqual(10);
		});


		it('it should know how many pins are standing after the 1st roll', function() {
			turn.bowlOne(9)
			expect(turn.pinsStanding).toEqual(1)
		});

	});	

	describe('has two bowls per frame/turn.', function() {


		it('it should know when one bowl has been taken', function() {
			turn.bowlOne(5);
			expect(turn.scoreByBowl.length).toEqual(1);
		});

		it('it should know when both bowls have been taken', function() {
			turn.bowlOne(2);
			turn.bowlTwo(2);
			expect(turn.scoreByBowl.length).toEqual(2);
		});

		it('and will not allow more than two bowls to be taken', function() {
			turn.bowlOne(2);
			turn.bowlTwo(2);
			expect(turn.bowlTwo(3)).toEqual(undefined)
		});


	});

	describe('should keep a score of', function() {

		it('the overall score for the turn/frame', function() {
			expect(turn.scoreByBowl).toEqual([]);
		});

		it('the number of pins hit in first bowl', function() {
			turn.bowlOne(5)
			expect(turn.scoreByBowl).toEqual([5]);
		});

		it('the number of pins hit in the second bowl', function() {
			turn.bowlOne(5)
			turn.bowlTwo(2)
			expect(turn.scoreByBowl).toEqual([5,2]);
		});

	});

	describe('could be a strike or spare', function() {


		it('it should know when there has been a strike', function() {
			turn.bowlOne(10)
			expect(turn._bonus()).toEqual("strike")
		});

		it('it should know when there has been a spare', function() {
			turn.bowlOne(9)
			turn.bowlTwo(1)
			expect(turn._bonus()).toEqual("spare")
		});


		it('it should not allow a second roll if first is a strike', function() {
			turn.bowlOne(10)
			turn.bowlTwo()
			expect(turn.scoreByBowl).toEqual([10, 0])
		});

		it('it should not get confused between a spare and strike', function() {
			turn.bowlOne(1)
			turn.bowlTwo(9)
			expect(turn._bonus()).toEqual("spare")
		});
		
	});	

});

