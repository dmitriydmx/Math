const { Magician, Daemon } = require('../character')

describe('Magician class', () => {
  test('должен правильно рассчитывать атаку без дурмана', () => {
    const magician = new Magician();
    magician.attack = 100;
    expect(magician.attack).toBe(100);
  });

  test('должен правильно рассчитывать атаку с дурманом на дистанции 2', () => {
    const magician = new Magician();
    magician.attack = 100;
    magician.stoned = true;
    magician.distance = 2;
    expect(magician.attack).toBe(85);
  });
});

describe('Daemon class', () => {
  test('должен правильно рассчитывать атаку без дурмана', () => {
    const daemon = new Daemon();
    daemon.attack = 100;
    expect(daemon.attack).toBe(100);
  });

  test('должен правильно рассчитывать атаку с дурманом на дистанции 3', () => {
    const daemon = new Daemon();
    daemon.attack = 100;
    daemon.stoned = true;
    daemon.distance = 3;
    expect(daemon.attack).toBe(72);
  });
});

