import { Ship } from "./ship";

class Gameboard {
  constructor() {
    // Generate row numbers to assist with horizontal placement
    this.rows = [];
    for (let i = 0; i < 10; i++) {
      const newRow = [];
      for (let j = 0; j < 10; j++) {
        newRow.push(j + i * 10);
      }
      this.rows.push(newRow);
    }

    // Generate column numbers to assist with vertical placement
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

    this.hitAttacks = [];
    this.missedAttacks = [];
  }

  placeShip(coord, length) {
    // Horizontal - fail to place ship if ship length extends beyond row length
    if (
      this.placementMode > 0 &&
      !this.rows.some(
        (row) => row.includes(coord) && row.includes(coord + length - 1)
      )
    )
      return;

    // Vertical - fail to place ship if ship length extends beyond col length
    if (this.placementMode < 0 && coord - 10 + 10 * length > 99) return;

    // Populate an array with the proposed coordinates
    const newCoords = [];
    // Horizontal
    if (this.placementMode > 0) {
      for (let i = coord; i < coord + length; i++) {
        newCoords.push(i);
      }
    }
    // Vertical
    if (this.placementMode < 0) {
      for (let i = coord; i < coord + (length * 10); i += 10) {
        newCoords.push(i);
      }
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

  receiveAttack(coord) {
    // Fail to attack if coord was previously guessed
    if (this.hitAttacks.includes(coord) || this.missedAttacks.includes(coord))
      return;

    // If coord is an occupied square, hit the appropriate ship
    if (this.occupiedSquares.includes(coord)) {
      const hitShip = this.placedShips.find((ship) =>
        ship.location.includes(coord)
      );
      hitShip.hit();
      this.hitAttacks.push(coord);
      // ...else add the coord to the missedAttacks array
    } else this.missedAttacks.push(coord);
  }

  allSunk() {
    return this.placedShips.every((ship) => {
      return ship.isSunk();
    });
  }
}

export { Gameboard };
