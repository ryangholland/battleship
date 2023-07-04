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
  }

  static clearSquares(squares) {
    squares.forEach((square) => {
      square.className = "";
      square.classList.add("blank");
    });
  }
}

export { DisplayController };
