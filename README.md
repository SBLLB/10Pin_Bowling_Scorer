##10-Pin Bowling Scorer


#### Count and sum the scores of a bowling game of one player(in javascript). Weekend Challenge, Week 5 at Maker's Academy.


###The Objective

Write a program in Javascript that counts and sums the scores of a bowling game. Take into account the following:ß

+ A bowling game consists of 10 frames
+ In every frame the player can throw one or two times, the actual number depending on strikes and spares
+ A Strike = all 10 pins knocked down with the first roll of a frame
+ A Spare = all 10 pins knocked down within the two rolls of a frame
+ The bonus for a strike iis the number of pins knocked down by the next two rolls (the next frame)
+ The bonus for a spare is the number of pins knocked down by the next roll (first role of next frame)
+ If the player rolls a strike or spare in the 10th frame he can roll the additional balls for the bonus
+ A Player can never roll more than 3 balls in the 10th frame
+ The additional rolls in the 10th frameonly count for the bonus, not the regular frame count
+ A Gutter Game is when the player never hits a pin (20 zero scores)
+ A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores to 300 points.


### Technologies Used
* Javascript
* Jasmine


### To do 
- [ ] Employ SOLID principles more throughout.  
  






A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can throw one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After 
###10th frame

If the player rolls a strike or spare in the 10th frame he can roll the additional balls for the bonus. But he can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus)
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus)
