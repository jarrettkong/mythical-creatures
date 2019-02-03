class Centaur {

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = !this.standing;
    this.counter = 0;
  }

  shoot() {

    if(this.layingDown) {
      return 'NO!';
    } else {
      if(this.cranky) {
        return 'NO!';
      } else {
        this.counter++;
        if(this.counter >= 3) {
          this.cranky = true;
        }
        return 'Twang!!!';
      }
    }
  }

  run() {
    if(this.layingDown) {
      return 'NO!';
    } else {
      this.counter++;
      if(this.counter >= 3) {
        this.cranky = true;
      }
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if(this.standing) {
      return 'NO!';
    } else {
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown() {
    if(this.standing) {
      this.standing = false;
    }
    this.layingDown = !this.standing;
  }

  standUp() {
    if(this.layingDown) {
      this.standing = true;
    }
    this.layingDown = !this.standing;
  }

  drinkPotion() {
    if(this.standing && this.cranky === false) {
      this.cranky = true;
    } else if(this.standing) {
      this.cranky = false;
    } else {
      return 'Not while I\'m laying down!';
    }
  }

}

module.exports = Centaur;
