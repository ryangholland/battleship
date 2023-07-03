import { Ship } from "./ship";

test("Create a ship with a length of 5", () => {
  const ship = new Ship(5);
  expect(ship.length).toBe(5);
});

test("Create a ship with a length of 3", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});

test("A newly created ship has never been hit", () => {
  const ship = new Ship(5);
  expect(ship.hits).toBe(0);
});

test("When a ship is hit once, hits should equal 1", () => {
  const ship = new Ship(5);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("When a ship is hit thrice, hits should equal 3", () => {
  const ship = new Ship(5);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(3);
});

test("A 5-length ship that has been hit once is not sunk", () => {
  const ship = new Ship(5);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("A 3-length ship that has been hit thrice is sunk", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
