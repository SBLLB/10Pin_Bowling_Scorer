
describe('A turn in a 10-pin bowling game', function() {

	beforeEach(function() {
			game = new Game;
		});

	describe('has bowling pins.', function() {


		it('there should be ten pins when a turns initialised', function() {
			expect(turn1.pinsStanding).toEqual(10);
		});


		it('it should know how many pins are standing after the 1st roll', function() {
			turn1.bowlOne(9)
			expect(turn1.pinsStanding).toEqual(1)
		});

	});	

	describe('has two standard bowls per frame/turn.', function() {


		it('it should know when one bowl has been taken', function() {
			turn1.bowlOne(5);
			expect(turn1.scoreByBowl.length).toEqual(1);
		});

		it('it should know when both bowls have been taken', function() {
			turn1.bowlOne(2);
			turn1.bowlTwo(2);
			expect(turn1.scoreByBowl.length).toEqual(2);
		});

		it('and will not allow more than two bowls to be taken', function() {
			turn1.bowlOne(2);
			turn1.bowlTwo(2);
			expect(turn1.bowlTwo(3)).toEqual(undefined)
		});


	});

	describe('should keep a score of', function() {

		it('the overall score for the turn/frame', function() {
			expect(turn1.scoreByBowl).toEqual([]);
		});

		it('the number of pins hit in first bowl', function() {
			turn1.bowlOne(5)
			expect(turn1.scoreByBowl).toEqual([5]);
		});

		it('the number of pins hit in the second bowl', function() {
			turn1.bowlOne(5)
			turn1.bowlTwo(2)
			expect(turn1.scoreByBowl).toEqual([5,2]);
		});

		it('the bonus points for a strike', function() {
			turn1.bowlOne(10);
			turn1.bowlTwo(0);
			turn2.score = 6
			turn1.recordBonusPoints();
			expect(turn1.bonusPoints).toEqual(6);
		});

		it('the bonus points for a spare', function() {
			turn1.bowlOne(1);
			turn1.bowlTwo(9);
			turn2.scoreByBowl = [3, 2]
			turn1.recordBonusPoints();
			expect(turn1.bonusPoints).toEqual(3);
		});

		it('a zero value for bonus points if no strike or spare ', function() {
			turn1.bowlOne(1);
			turn1.bowlTwo(2);
			turn2.scoreByBowl = [3, 2]
			turn1.recordBonusPoints();
			expect(turn1.bonusPoints).toEqual(0);
		});

		it('the bonus points if there is a spare in final frame', function() {
			turn10.scoreByBowl = [5,5];
			turn10.score = 10;
			turn10.activateFinalFrameBonus();
			finalFrameBonus.totalBonusScore = 15;
			turn10.recordBonusPoints();
			expect(turn10.bonusPoints).toEqual(15);

		});

	});

	describe('could be a strike or spare', function() {


		it('it should know when there has been a strike', function() {
			turn1.bowlOne(10)
			expect(turn1._isStrike()).toEqual(true)
		});

		it('it should know when there has been a spare', function() {
			turn1.bowlOne(9)
			turn1.bowlTwo(1)
			expect(turn1._isSpare()).toEqual(true)
		});


		it('it should not allow a second roll if first is a strike', function() {
			turn1.bowlOne(10)
			turn1.bowlTwo()
			expect(turn1.scoreByBowl).toEqual([10, 0])
		});

		it('it should not confuse a spare with a strike', function() {
			turn1.bowlOne(1)
			turn1.bowlTwo(9)
			expect(turn1._isStrike()).toEqual(false)
		});

		it('it should not confuse a strike with a spare', function() {
			turn1.bowlOne(10)
			turn1.bowlTwo(0)
			expect(turn1._isSpare()).toEqual(false)
		});
		
	});	

});

