class Werewolf {

  constructor(name, location, human = true) {
    this.name = name;
    this.location = location;
    this.hungry = false;
    this.human = human;
    this.wolf = !this.human;
    this.victims = [];
  }

  change() {
    if(this.human) {
      this.human = false;
      this.wolf = !this.human;
      this.hungry = true;
    } else {
      this.human = true;
      this.wolf = !this.human;
      this.hungry = false;
    }
  }

  eat(victim) {
    if(this.hungry && this.wolf) {
      this.victims.push(victim);
      victim.alive = false;
      this.change();
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Werewolf;
