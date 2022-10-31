
var j = document.querySelectorAll('.cell');
var board = document.querySelectorAll(".x");
board = Array.from(board)
console.log(board)
var winning = document.getElementsByClassName('winnings');
let turn
var x_class = 'X';
var o_class = 'O';

//winnings 
const winnings = [
  //horizontal winnings
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical winnings
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonally
  [0, 4, 8],
  [2, 4, 6],

]


function startingGameO() {
  let turn = true;


  j.forEach(cell => {

    cell.addEventListener('click', hi, { once: true })
  });


  setboard()

  restart()
}

startingGameO()

function hi(e) {
  const cell = e.target;
  //SET THE FIRST PLAYER TO USE CIRCLE AND NEXT PLAYER 
  //TO X

  const currentclass = turn ? o_class : x_class
  marksplace(cell, currentclass)

  swapTurnsI()
  winner(currentclass)
  draw(currentclass)
}


//ASSIGN THE CELL TO THE GIVEN X OR O 

function marksplace(cell, currentclass) {
  cell.innerHTML = currentclass
}
//CHECK WHO TURN IS IT BY SETITING THE TURN TO BE EITHR FALSE
//OR TRUE WHEN A CELL IS CLICKED
//OR STETTING IT TO THE OPPOSITE TURN
function swapTurnsI() {
  turn = !turn
}


//THIS HANDLE THE ADDITION OF EACH CLASS IN THE CELL


function setboard() {
  board.classList.remove(x_class)
  board.classList.remove(o_class)
  if (turn) {
    board.classList.add(x_class)
  }
  else {
    board.classList.add(o_class)
  }
}    //the winner function loops  the winnings matrix and check if every 
//cell according to the index of the board are equal in the matrix 
//and display the player that
function winner(currentclass) {
  winnings.forEach(function (combination) {
    let check = combination.every(idx => board[idx].innerHTML == currentclass)
    if (check) {


      highlight(combination)
      alert(`player ${currentclass} wins`)

    }




  })
}

//loop through the combinstion of the wins and highliht the index of each cells
function highlight(combination) {
  combination.forEach(function (idx) {
    board[idx].classList.add('highlight')

  })

}

function restart() {
  window.location.reload()
}
