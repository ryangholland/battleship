import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.rows = [];
    for (let i = 0; i < 10; i++) {
      const newRow = [];
      for (let j = 0; j < 10; j++) {
        newRow.push(j + i * 10);
      }
      this.rows.push(newRow);
    }

    this.cols = [];
    for (let i = 0; i < 10; i++) {
      const newCol = [];
      for (let j = 0; j < 100; j += 10) {
        newCol.push(j + i);
      }
      this.cols.push(newCol);
    }

    this.occupiedSquares = [];
    this.placedShips = [];

    this.placementMode = 1;
  }

  placeShip(coord, length) {
    // Fail to place ship if ship length extends beyond row length
    if (
      !this.rows.some(
        (row) => row.includes(coord) && row.includes(coord + length)
      )
    )
      return;

    // Populate an array with the proposed coordinates
    const newCoords = [];
    for (let i = coord; i < coord + length; i++) {
      newCoords.push(i);
    }

    // Fail to place ship if any of the proposed coordiantes are occupied
    if (newCoords.some((coord) => this.occupiedSquares.includes(coord))) return;

    // Create new ship of given length, set location with new coords, and add it to placedShips array
    const newShip = new Ship(length);
    newShip.location.push(...newCoords);
    this.placedShips.push(newShip);

    // Add new coordiantes to occupiedSquares
    this.occupiedSquares.push(...newCoords);
  }

  receiveAttack(coord) {}
}

export { Gameboard };
