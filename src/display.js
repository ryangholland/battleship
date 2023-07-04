class DisplayController {
  constructor() {}

  static renderBoard(div, board) {
    board.rows.forEach((row) => {
      const newRow = document.createElement("div");
      row.forEach((square) => {
        const newSquare = document.createElement("div");
        newRow.append(newSquare);
      });
      div.append(newRow);
    });
  }
}

export { DisplayController };
