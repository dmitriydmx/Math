class Character {
  constructor() {
    this.distance = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let result = this._attack * (1 - (this.distance - 1) * 0.1);
    if (this.stoned) {
      result -= Math.log2(this.distance) * 5;
    }
    return Math.round(result);
  }

  set attack(value) {
    this._attack = value;
  }
}

class Magician extends Character {
  constructor() {
    super();
  }
}

class Daemon extends Character {
  constructor() {
    super();
  }
}

module.exports = { Magician, Daemon };
