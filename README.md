# Connect Four Game

Description:

Connect Four is a two player game with the objective of forming a horizontal, vertical, or diagonal line of four discs. Each player takes turns strategically placing their discs until one player wins by connecting four!

Technologies used:
- HTML5
- CSS3
- JavaScript
- JQuery

Approach:
To summarize my approach for the development of this game- I created a board with 42 divs using a for loop in javascript. This allowed me to create a 6 row, 7 column platform to play on. I started by adding a class and event listener that allows only the first row to be clicked. When a player clicks a circle, the divs color is changed to the players color. As each player clicks the spot they would like to play, the div above it becomes dynamically clickable and open for a player to select. The players input is also saved in an array each time they make a move. The game is set up so that each player alternates turns, and after a player connects four, an alert pops up stating the winner. In order to test a win, I created an array of all possible wins, which is compared to the players input array. If the div id's match, a winner is declared. Lastly, I created a score board that tracks points and allows each player to input their name.

Link to site:
https://moraleg.github.io/Connect-Four-Game/

Improvements:
- Making the game responsive to allow play on all platforms.
- Adding DOM alerts.
- Allowing a reset of the board only, rather than the entire game.
- Adding animation features to make it more lively.
- Creating levels with different themes.
