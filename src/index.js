import "./style.css";
import { Player } from "./player.js";
import { DisplayController } from "./display";

const oppDiv = document.querySelector(".opponent-board");
const playerDiv = document.querySelector(".player-board");
const instructionsDiv = document.querySelector(".instructions");
const gameOverModal = document.querySelector("[data-game-over-modal]");
const gameOverText = document.querySelector("[data-game-over-text]");
const newGameBtn = document.querySelector("[data-new-game-button]");

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

    this.initPlacementPhase();
  }

  initPlacementPhase() {
    DisplayController.showPlacementInstructions(instructionsDiv);

    // AI randomly places ships
    while (this.aiPlayer.shipsToPlace.some((ship) => !ship.placed)) {
      this.aiPlayer.shipsToPlace.forEach((ship) => {
        if (!ship.placed) {
          ship.placed = this.aiPlayer.gameboard.placeShip(
            Math.floor(Math.random() * (Math.floor(99) - 0)),
            ship.length
          );
        }
        this.aiPlayer.gameboard.placementMode *= -1;
      });
    }

    this.activatePlacementSquares();
  }

  activateAttackSquares() {
    this.oppSquares.forEach((square) => {
      square.addEventListener("click", (e) => {
        this.playRound(e);
      });
    });
  }

  deactivateAttackSquares() {
    this.oppSquares.forEach((square) => {
      square.removeEventListener("click", (e) => {
        this.playRound(e);
      });
    });
  }

  activatePlacementSquares() {
    let playerPlaced = 0;
    this.playerSquares.forEach((square) => {
      square.addEventListener("click", (e) => {
        if (this.humanPlayer.placing) {
          let placed = this.humanPlayer.gameboard.placeShip(
            Number(e.target.dataset.playerSquare),
            this.humanPlayer.activeShip.length
          );

          if (placed) {
            DisplayController.renderPlayerBoard(
              this.playerSquares,
              this.humanPlayer.gameboard
            );
            playerPlaced++;
            this.humanPlayer.activeShip =
              this.humanPlayer.shipsToPlace[playerPlaced];
            if (playerPlaced > 5) {
              this.humanPlayer.placing = false;
              DisplayController.clearDiv(instructionsDiv);
              DisplayController.showAttackInstructions(instructionsDiv);
              this.activateAttackSquares();
            }
          }
        }
      });
    });

    this.playerSquares.forEach((square) => {
      square.addEventListener("mouseover", (e) => {
        if (this.humanPlayer.placing) {
          DisplayController.placementHover(
            Number(e.target.dataset.playerSquare),
            this.playerSquares,
            this.humanPlayer.activeShip.length,
            this.humanPlayer.gameboard.placementMode
          );
        }
      });
    });

    this.playerSquares.forEach((square) => {
      square.addEventListener("mouseout", (e) => {
        if (this.humanPlayer.placing) {
          DisplayController.placementHoverOut(
            Number(e.target.dataset.playerSquare),
            this.playerSquares,
            this.humanPlayer.activeShip.length,
            this.humanPlayer.gameboard.placementMode
          );
        }
      });
    });

    document.addEventListener("keypress", (e) => {
      if (e.key === "r" || e.key === "R")
        this.humanPlayer.gameboard.placementMode *= -1;
      DisplayController.renderPlayerBoard(
        this.playerSquares,
        this.humanPlayer.gameboard
      );
    });
  }

  playRound(e) {
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

    this.aiPlayer.gameboard.receiveAttack(Number(e.target.dataset.oppSquare));
    DisplayController.renderOppBoard(this.oppSquares, this.aiPlayer.gameboard);

    // End game if all opp's ships sunk
    if (this.aiPlayer.gameboard.allSunk()) {
      this.gameOver("win");
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
      this.gameOver("lose");
    }
  }

  gameOver(result) {
    gameOverText.textContent = result === "win" ? "You won!" : "You lost!";
    gameOverModal.showModal();
    newGameBtn.addEventListener("click", () => {
      DisplayController.clearDiv(oppDiv);
      DisplayController.clearDiv(playerDiv);
      DisplayController.clearDiv(instructionsDiv);
      gameOverModal.close();
      new Game();
    });
  }
}

new Game();
