import "./style.css";
import { Player } from "./player.js";
import { DisplayController } from "./display";

const oppDiv = document.querySelector(".opponent-board");
const playerDiv = document.querySelector(".player-board");

class Game {
  constructor() {
    this.aiPlayer = new Player(true);
    this.humanPlayer = new Player(false);
    DisplayController.buildOppBoard(oppDiv, this.aiPlayer.gameboard);
    DisplayController.buildPlayerBoard(playerDiv, this.humanPlayer.gameboard);

    this.oppSquares = Array.from(
      document.querySelectorAll("[data-opp-square]")
    );
    this.oppSquares.forEach((square) => {
      square.addEventListener("click", (e) => {
        this.aiPlayer.gameboard.receiveAttack(
          Number(e.target.dataset.oppSquare)
        );
        DisplayController.renderOppBoard(
          this.oppSquares,
          this.aiPlayer.gameboard
        );
      });
    });

    this.playerSquares = Array.from(
      document.querySelectorAll("[data-player-square]")
    );

    this.placeMockShips();
    DisplayController.renderPlayerBoard(
      this.playerSquares,
      this.humanPlayer.gameboard
    );
  }

  // Place ships at predetermined locations for testing purposes
  placeMockShips() {
    this.aiPlayer.gameboard.placeShip(0, 5);
    this.aiPlayer.gameboard.placeShip(22, 4);
    this.aiPlayer.gameboard.placeShip(44, 3);
    this.aiPlayer.gameboard.placeShip(66, 2);

    this.humanPlayer.gameboard.placeShip(5, 5);
    this.humanPlayer.gameboard.placeShip(23, 4);
    this.humanPlayer.gameboard.placeShip(44, 3);
    this.humanPlayer.gameboard.placeShip(76, 2);
  }
}

const game = new Game();
