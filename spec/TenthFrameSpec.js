
// describe('Tenth Frame bonus bowls', function() {

// 	beforeEach(function() {
// 			game = new Game;
// 			turn = new Turn(game);
// 			finalFrame = new FinalFrame(game);
// 		});


// 	describe('a Game should not allow a bonus bowl', function() {

// 		it('if not in the tenth frame', function() {
// 			game.turnsLeft = 9
// 			game.strikeSpareTracker = ["strike"]
// 			expect(finalFrame.isThereABonusBowlOne()).toEqual(false)
// 		});


// 		it('if the tenth frame did not yield a strike or spare', function() {
// 			game.turnsLeft === 0
// 			game.frameScores = [[1,2], [4,5], [2,4], [10,0], [2,5], [3.6], [3,3], [2,2], [1,8], [1,8]]
// 			game.strikeSpareTracker = [["no bonus"], ["no bonus"], ["no bonus"], ["strike"], ["no bonus"], ["spare"], ["no bonus"], ["strike"], ["no bonus"], ["no bonus"]]
// 			expect(finalFrame.isThereABonusBowlOne()).toEqual(false)
// 		});
// 	});

// 	describe('a Game should allow a bonus bowl', function() {
		
// 		it('if the tenth frame yielded a strike or spare', function() {
// 			game.turnsLeft === 0
// 			game.frameScores = [[1,2], [4,5], [2,4], [10,0], [2,5], [3.6], [3,3], [2,2], [1,8], [2,8]]
// 			game.strikeSpareTracker = [["no bonus"], ["no bonus"], ["no bonus"], ["strike"], ["no bonus"], ["spare"], ["no bonus"], ["strike"], ["no bonus"], ["spare"]]
// 			expect(finalFrame.isThereABonusBowlOne()).toBe(true)
// 		});
// 	});

// });