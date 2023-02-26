class Fruit {
  // kod tutaj
  constructor(name = "Unknown fruit", color = "Unknown color", sweetness = 5) {
    this.name = name;
    this.color = color;
    this.sweetness = sweetness;
    if (sweetness < 0) {
      this.sweetness = 0;
    } else if (sweetness > 10) {
      this.sweetness = 10;
    } else {
      this.sweetness = sweetness;
    }
  }
}

class Apple extends Fruit {
  // oraz tutaj :)
  constructor(
    name,
    color,
    sweetness,
    goodForCider = false,
    goodForJuice = false
  ) {
    super(name, color, sweetness);
    this.goodForCider = goodForCider;
    this.goodForJuice = goodForJuice;
  }
}

module.exports = {
  Apple,
  Fruit,
};
