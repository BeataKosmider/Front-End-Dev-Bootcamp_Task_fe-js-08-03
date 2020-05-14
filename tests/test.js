const { Apple, Fruit } = require('..');
const { toHaveAttribute, toBeInTheDocument } = require('@testing-library/jest-dom/matchers');

expect.extend({ toHaveAttribute, toBeInTheDocument });

beforeEach( () => {
});

describe('', () => {
  it('Poprawnie ustawiono domyślną nazwę', async () => {
    const apple = new Apple();
    expect(apple.name).toBe("Unknown fruit");
  })

  it('Poprawnie ustawiono domyślny kolor', async () => {
    const apple = new Apple();
    expect(apple.color).toBe("Unknown color");
  })

  it('Poprawnie ustawiono domyślną słodkość', async () => {
    const apple = new Apple();
    expect(apple.sweetness).toBe(5);
  })

  it('Poprawnie ustawiono słodkość jeżeli większa niż zakres', async () => {
    const apple = new Apple(false, false, 'bla', 'bla', 15);
    expect(apple.sweetness).toBe(10);
  })

  it('Poprawnie ustawiono słodkość jeżeli mniejsza niż zakres', async () => {
    const apple = new Apple(false, false, 'bla', 'bla', -50);
    expect(apple.sweetness).toBe(0);
  })

  it('Poprawnie ustawiono domyślny goodForCider', async () => {
    const apple = new Apple();
    expect(apple.goodForCider).toBe(false);
  })

  it('Poprawnie ustawiono domyślny goodForJuice', async () => {
    const apple = new Apple();
    expect(apple.goodForJuice).toBe(false);
  })
});
