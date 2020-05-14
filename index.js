class Fruit {
  constructor(name = "Unknown fruit", color = 'Unknown color', sweetness = 5) {
    let sweetnessValidated

    if (sweetness < 0) {
      sweetnessValidated = 0;
    } else if (sweetness > 10) {
      sweetnessValidated = 10;
    } else {
      sweetnessValidated = sweetness;
    }
    
    this.name = name;
    this.color = color;
    this.sweetness = sweetnessValidated;
  }
};

class Apple extends Fruit {
  constructor(goodForCider = false, goodForJuice = false, ...args) {
    super(...args)
    this.goodForCider = goodForCider;
    this.goodForJuice = goodForJuice;
  }
};

module.exports = {
  Apple,
  Fruit,
};
