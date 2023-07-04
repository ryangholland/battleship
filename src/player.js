import { Gameboard } from "./gameboard";

class Player {
  constructor(isAI) {
    this.isAI = isAI;
    this.gameboard = new Gameboard();
  }
}

export { Player };
