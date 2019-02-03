class Wizard {

  constructor(obj) {
    this.name = obj.name;
    this.bearded = true;
    this.isRested = true;
    this.spellsCast = 0;

    if(obj.bearded === false) {
      this.bearded = false
    }
  }

  incantation(str) {
    return str.toUpperCase();
  }

  cast() {
    this.spellsCast++;
    if(this.spellsCast >= 3) {
      this.isRested = false;
      return "I SHALL NOT CAST!";
    } else {
      return "MAGIC BULLET";
    }
  }

}

module.exports = Wizard;
