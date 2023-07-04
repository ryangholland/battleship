class DisplayController {
  constructor() {}

  static renderBoard(div, board) {
    // Clear any old displays and build new board display
    this.clearDiv(div);
    board.rows.forEach((row) => {
      const newRow = document.createElement("div");
      row.forEach((square) => {
        const newSquare = document.createElement("div");

        newSquare.setAttribute("data-square", square);

        // If square is occupied, color it white
        if (board.occupiedSquares.includes(square))
          newSquare.classList.add("occupied");

        newRow.append(newSquare);
      });
      div.append(newRow);
    });
  }

  static clearDiv(div) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
}

export { DisplayController };
