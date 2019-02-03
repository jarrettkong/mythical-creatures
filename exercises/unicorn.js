class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    return this.color.toLowerCase() === 'white' ? true : false
  }

  says(phrase) {
    return `**;* ${phrase} *;**`;
  }
}

module.exports = Unicorn;
