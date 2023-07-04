import "./style.css";
import { Player } from "./player.js";
import { DisplayController } from "./display";

const oppDiv = document.querySelector(".opponent-board");
const playerDiv = document.querySelector(".player-board");
const aiPlayer = new Player(true);
const humanPlayer = new Player(false);

console.log(oppDiv)

DisplayController.renderBoard(oppDiv, aiPlayer.gameboard)
DisplayController.renderBoard(playerDiv, humanPlayer.gameboard)