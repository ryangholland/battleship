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

    // TESTING ONLY
    // Check for any occupied squares, color them white
    /*
    squares.forEach((square) => {
      if (board.occupiedSquares.includes(Number(square.dataset.oppSquare))) {
        square.classList.add("occupied");
      }
    });
    */

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
      square.style.backgroundColor = "";
      square.classList.add("blank");
    });
  }

  static clearDiv(div) {
    while (div.firstChild) {
      div.removeChild(div.lastChild);
    }
  }

  static placementHover(coord, squares, length, mode) {
    if (mode > 0) {
      for (let i = coord; i < coord + length; i++) {
        if (squares[i] && !squares[i].classList.contains("occupied")) {
          squares[i].style.backgroundColor = "green";
        }
      }
    }

    if (mode < 0) {
      for (let i = coord; i < coord + length * 10; i += 10) {
        if (squares[i] && !squares[i].classList.contains("occupied")) {
          squares[i].style.backgroundColor = "green";
        }
      }
    }
  }

  static placementHoverOut(coord, squares, length, mode) {
    if (mode > 0) {
      for (let i = coord; i < coord + length; i++) {
        if (squares[i] && !squares[i].classList.contains("occupied")) {
          squares[i].style.backgroundColor = "black";
        }
      }
    }
    if (mode < 0) {
      for (let i = coord; i < coord + length * 10; i += 10) {
        if (squares[i] && !squares[i].classList.contains("occupied")) {
          squares[i].style.backgroundColor = "black";
        }
      }
    }
  }

  static showPlacementInstructions(div) {
    const lineOne = document.createElement("p");
    const lineTwo = document.createElement("p");
    lineOne.textContent = "Click a square on your board to place a ship.";
    lineTwo.textContent = 'Press "R" to change direction.';
    div.append(lineOne);
    div.append(lineTwo);
  }

  static showAttackInstructions(div) {
    const lineOne = document.createElement("p");
    const lineTwo = document.createElement("p");
    lineOne.textContent = "Click a square on your opponent's board to attack.";
    lineTwo.textContent = "Sink all your opponent's ships!";
    div.append(lineOne);
    div.append(lineTwo);
  }
}

export { DisplayController };
