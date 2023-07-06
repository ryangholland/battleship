import { Gameboard } from "./gameboard";

class Player {
  constructor(isAI) {
    this.isAI = isAI;
    this.gameboard = new Gameboard();
    this.shipsToPlace = [
      {
        length: 5,
        placed: false,
        id: 1,
      },
      {
        length: 4,
        placed: false,
        id: 2,
      },
      {
        length: 3,
        placed: false,
        id: 3,
      },
      {
        length: 3,
        placed: false,
        id: 4,
      },
      {
        length: 2,
        placed: false,
        id: 5,
      },
      {
        length: 2,
        placed: false,
        id: 6,
      },
    ];
    this.activeShip = this.shipsToPlace[0];
    this.placing = true;
  }
}

export { Player };
