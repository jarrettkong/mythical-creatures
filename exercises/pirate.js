class Pirate {

  constructor(name, job = "Scallywag") {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.crimes = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.crimes++;
    this.crimes >= 3 ? this.cursed = true : this.cursed  = false;
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }

}

module.exports = Pirate;
