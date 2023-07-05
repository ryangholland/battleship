class DisplayController {
  constructor() {}

  static buildPlayerBoard(div, board) {
    board.rows.forEach((row) => {
      const newRow = document.createElement("div");
      row.forEach((square) => {
        const newSquare = document.createElement("div");
        newSquare.setAttribute("data-player-square", square);
        newRow.append(newSquare);
      });
      div.append(newRow);
    });
  }

  static buildOppBoard(div, board) {
    board.rows.forEach((row) => {
      const newRow = document.createElement("div");
      row.forEach((square) => {
        const newSquare = document.createElement("div");
        newSquare.setAttribute("data-opp-square", square);
        newRow.append(newSquare);
      });
      div.append(newRow);
    });
  }

  static renderPlayerBoard(squares, board) {
    this.clearSquares(squares);
    // Check for any occupied squares, color them white
    squares.forEach((square) => {
      if (board.occupiedSquares.includes(Number(square.dataset.playerSquare))) {
        square.classList.add("occupied");
      }
    });

    // Check for any missed attacks, color them blue
    squares.forEach((square) => {
      if (board.missedAttacks.includes(Number(square.dataset.playerSquare))) {
        square.classList.add("missed");
      }
    });

    // Check for any hit attacks, color them red
    squares.forEach((square) => {
      if (board.hitAttacks.includes(Number(square.dataset.playerSquare))) {
        square.classList.add("hit");
      }
    });
  }

  static renderOppBoard(squares, board) {
    this.clearSquares(squares);
    // Check for any missed attacks, color them blue
    squares.forEach((square) => {
      if (board.missedAttacks.includes(Number(square.dataset.oppSquare))) {
        square.classList.add("missed");
      }
    });

    // Check for any hit attacks, color them red
    squares.forEach((square) => {
      if (board.hitAttacks.includes(Number(square.dataset.oppSquare))) {
        square.classList.add("hit");
      }
    });
  }

  static clearSquares(squares) {
    squares.forEach((square) => {
      square.className = "";
      square.classList.add("blank");
    });
  }

  static clearDiv(div) {
    while (div.firstChild) {
      div.removeChild(div.lastChild);
    }
  }
}

export { DisplayController };
