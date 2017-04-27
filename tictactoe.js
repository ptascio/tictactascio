var count = 1;
var play = true;



function restart(){
  var replay = document.getElementById("start-over");
  replay.addEventListener("click", () => window.location.reload(), false);
}

function makeClickEvent(el, board){
    el.addEventListener("click", () => placeShape(el, board), false);
}

function placeShape(el, board){
  if (count === 9){
    announceWinner();
  }
  if (play){
  if (el.innerHTML === ''){
    count+=1;
    if (count % 2 === 0){
      el.innerHTML = "X";

    }else {
      el.innerHTML = "O";
    }
    el.style.cssText = "background: #87cefa; cursor: default;";
      markBoard(el, board);
  }
    if (count >= 5){
      checkBoard(board);
    }
  }
}

function superGrover(){
  var superG = document.querySelector('img');
  superG.style.cssText = "display: inline-block;";
}

function announceWinner(el){
  var p = document.getElementById("winner");
  var announcement;
  if (count === 9){
    announcement = "No winner this time! Better play again!";
  }else {
    superGrover();
    announcement = `${el} is the winner! Time to play again!`;
  }
  p.innerHTML = announcement;
}

function makeBoard(){
  var board = [
    ["","",""],
    ["","",""],
    ["","",""]
  ];
  return board;
}

function addBoard(){
  let board = makeBoard();
  let list = document.createElement('ul');
  for(var i = 0; i < board.length; i++){
    let innerB = board[i];
    for(var j = 0; j < innerB.length; j++){
      var li = document.createElement('li');
      li.x = i;
      li.y = j;
      li.innerHTML = innerB[j];
      makeClickEvent(li, board);
      list.appendChild(li);
    }

  }
  let thisboard = document.getElementById('board');
  thisboard.appendChild(list);
}

function markBoard(el, board){
  board[el.x][el.y] = el.innerHTML;
}

function checkBoard(board){
  checkHorizontal(board);
  checkVertical(board);
  checkDiagonal(board);
}

function checkHorizontal(board){
  for(let i = 0; i < board.length; i++){
    let innerB = board[i];
      if (innerB.every(x => x === "X") || innerB.every(o => o === "O")){
        play = false;
        announceWinner(innerB[0]);
      }
  }
}

var verticalBoard = [];
function checkVertical(board){
  var i = 0;
  var j = 0;
  while(j < 3){
    while (i < 3){
      verticalBoard.push(board[i][j]);
      if (verticalBoard.length === 3 && (verticalBoard.every(o => o === "O") || verticalBoard.every(x => x === "X"))){
        play = false;
        announceWinner(verticalBoard[0]);
      }
      i++;
    }
      verticalBoard = [];
      j++;
      i = 0;
  }
}

function checkDiagonal(board){
  let first = [
    board[0][0], board[1][1], board[2][2]
  ];
  let second = [
    board[0][2], board[1][1], board[2][0]
  ];
  var winner = board[1][1];
  if (first.every(o => o === "O") || first.every(x => x === "X")) {
    play = false;
    announceWinner(winner);
  }
  if (second.every(o => o === "O") || second.every(x => x === "X")){
    play = false;
    announceWinner(winner);
  }
}

function playGame(){
  restart();
  addBoard();
}


document.addEventListener("DOMContentLoaded", ()=> {
  playGame();
});
