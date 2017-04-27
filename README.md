# TicTacTascio

TicTacTascio is my version of TicTacToe made with vanilla JavaScript and HTML/CSS.

## Board
The first step was to make the board. In my JS script the board is an array with 3 subarrays inside of it. Each subarray has 3 blank strings.
To communicate this to the browser, I created an ```ul``` and within that created a ```li``` item for each blank string in the subarrays. Then, I appended the ```ul``` to the ```section``` element of the page.

#### ```li```
Each ```li``` needs to have a correlation to the board in the JS file. In order to keep track of this, I gave each ```li``` an x and a y attribute which are the indices of the element board array. When a player changes a space to an ```X``` or ```O``` in the browser the board array gets updated according to the indices referenced through the x and y attributes. A player can only change the contents of an ```li``` if the ```innerHTML``` is a blank string.

## Reset Play
At any point players can reset the game by clicking the ```New Game``` button. This makes use of the window's ```reload()``` function and refreshes the page. 

## Count and Play
#### Count
In order to win at Tic Tac Toe a minimum of 5 moves need to be played. To keep track of this, I created a ```count``` variable. If ```count >= 5```, then I ran my functions designed to check if someone has won the game yet. The ```count``` variable also came in handy to alternate between ```X``` and ```O``` markers.
#### Play
The ```play``` variable is initially set to ```true``` which allows players to mark the board. Once someone wins, ```play``` is set to false and elements in the ```ul``` are no longer clickable.

## Who wins?
When playing Tic Tac Toe there are 3 ways to win:
* Horizontally
  * There are 3 ways to win Horizontally
* Vertically
  * There are 3 ways to win Vertically
* Diagonally
  * There are 2 ways to win Diagonally

#### Horizontally
Checking for a horizontal victory was easy enough. I just iterated through my board array. If a subarray consisted of only ```X```s or only ```O```s then a winner will be announced and game play stops.

#### Vertically
A vertical victory is a touch more challenging to check for. I chose to create a ```verticalBoard``` variable which holds an array. I then iterated through the board using 2 while loops and populated the ```verticalBoard``` with the appropriate elements form the board. I then check if ```verticalBoard``` is all ```X```s or all ```O```s and reset the ```verticalBoard``` to an empty array after each check. Because the length of ```board``` never changes, I chose to just hard code the conditional within each while loop.

#### Diagonally
Since there are only 2 ways in which a player can win Diagonally I chose to hard code them as 2 different arrays and check each one.

## CSS
I use some simple CSS techniques to alert players to the state of the game. If a space is available, the background will change color and the cursor will change to pointer upon hover. Similarly, if a player would like to reset the game the New Game text within the button will grow when hovered over.

## ToDos
* Allow players to choose between ```X``` or ```O```.
* Allow players to enter their names
* Implement AI for solo play

![superGrover](https://github.com/ptascio/tictactascio/blob/master/images/supergrover.jpg)
