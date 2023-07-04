import "./style.css";
import { Player } from "./player.js";
import { DisplayController } from "./display";

const oppDiv = document.querySelector(".opponent-board");
const playerDiv = document.querySelector(".player-board");

class Game {
  constructor() {
    this.aiPlayer = new Player(true);
    this.humanPlayer = new Player(false);
    DisplayController.renderBoard(oppDiv, this.aiPlayer.gameboard);
    DisplayController.renderBoard(playerDiv, this.humanPlayer.gameboard);
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


    DisplayController.renderBoard(oppDiv, this.aiPlayer.gameboard)
    DisplayController.renderBoard(playerDiv, this.humanPlayer.gameboard)
  }
}

const game = new Game();
game.placeMockShips();
