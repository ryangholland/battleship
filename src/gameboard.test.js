import { Gameboard } from "./gameboard";

test("Gameboard should have 10 rows of 10 / 10 columns of 10", () => {
  const gameboard = new Gameboard();
  expect(gameboard.rows.length).toBe(10);
  expect(gameboard.cols.length).toBe(10);
  expect(gameboard.rows[9].length).toBe(10);
  expect(gameboard.cols[0].length).toBe(10);
});

test("Placing a 5-length ship horizontally correctly populates occupiedSquares", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 5);
  expect(gameboard.occupiedSquares).toEqual([0, 1, 2, 3, 4]);
  expect(gameboard.placedShips.length).toBe(1);
});

test("Placing a 5-length ship horizontally correctly populates placedShips", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 5);
  expect(gameboard.placedShips.length).toBe(1);
});

test("Trying to place a ship over an existing ship will fail", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 5);
  gameboard.placeShip(2, 3);
  expect(gameboard.placedShips.length).toBe(1);
});

test("Trying to place a ship over an existing ship will fail 2", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, 3);
  gameboard.placeShip(0, 4);
  expect(gameboard.placedShips.length).toBe(1);
});

test("Trying to place a ship beyond row length will fail", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(8, 4);
  expect(gameboard.placedShips.length).toBe(0);
});

test("Trying to place a ship beyond row length will fail 2", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(97, 5);
  expect(gameboard.placedShips.length).toBe(0);
});

test("receiveAttack records a missed attack if no ship at given coordinate", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 4);
  gameboard.receiveAttack(50);
  expect(gameboard.missedAttacks.length).toBe(1);
  expect(gameboard.missedAttacks[0]).toBe(50);
});

test("receiveAttack records a hit if ship at given coordinate", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 4);
  gameboard.receiveAttack(2);
  expect(gameboard.placedShips[0].hits).toBe(1);
});

test("receiveAttack fails if same coordiante is selected twice", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 4);
  gameboard.receiveAttack(2);
  gameboard.receiveAttack(2);
  expect(gameboard.placedShips[0].hits).toBe(1);
});