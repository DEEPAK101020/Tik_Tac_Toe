const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

let currentPlayer = 'X';
let winner = null;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const handleClick = (index) => {
  if (!winner && !cells[index].textContent) {
    cells[index].textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      winner = currentPlayer;
      message.textContent = `${winner} wins!`;
    } else if (checkDraw()) {
      message.textContent = `It's a draw!`;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
};

const checkWin = (player) => {
  return winningCombos.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === player;
    });
  });
};

const checkDraw = () => {
  return [...cells].every(cell => cell.textContent !== '');
};

const reset = () => {
  cells.forEach(cell => cell.textContent = '');
  message.textContent = '';
  currentPlayer = 'X';
  winner = null;
};
