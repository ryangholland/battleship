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

    this.playerSquares = Array.from(
      document.querySelectorAll("[data-player-square]")
    );

    this.placeMockShips();
    DisplayController.renderPlayerBoard(
      this.playerSquares,
      this.humanPlayer.gameboard
    );

    this.initGameLoop();
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

  initGameLoop() {
    this.oppSquares.forEach((square) => {
      square.addEventListener("click", (e) => {
        // If coord hasn't been guessed, attack and update opp board
        if (
          this.aiPlayer.gameboard.hitAttacks.includes(
            Number(e.target.dataset.oppSquare)
          ) ||
          this.aiPlayer.gameboard.missedAttacks.includes(
            Number(e.target.dataset.oppSquare)
          )
        )
          return;

        this.aiPlayer.gameboard.receiveAttack(
          Number(e.target.dataset.oppSquare)
        );
        DisplayController.renderOppBoard(
          this.oppSquares,
          this.aiPlayer.gameboard
        );

        // End game if all opp's ships sunk
        if (this.aiPlayer.gameboard.allSunk()) {
          // Game over code
          console.log("Game over. Player wins.");
        }

        // Generate a random coord for AI's attack; make sure it hasn't been used
        let aiAttack = null;
        let checkArray = [
          ...this.humanPlayer.gameboard.hitAttacks,
          ...this.humanPlayer.gameboard.missedAttacks,
        ];
        do {
          aiAttack = Math.floor(Math.random() * (Math.floor(99) - 0));
        } while (checkArray.includes(aiAttack));

        this.humanPlayer.gameboard.receiveAttack(aiAttack);

        DisplayController.renderPlayerBoard(
          this.playerSquares,
          this.humanPlayer.gameboard
        );

        // End game if all player's ships sunk
        if (this.humanPlayer.gameboard.allSunk()) {
          // Game over code
          console.log("Game over. Opponent wins.");
        }
      });
    });
  }
}

let game = new Game();
