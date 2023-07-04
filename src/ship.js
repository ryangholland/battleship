class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.location = [];
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.length === this.hits;
  }
}

export { Ship };
