import AgeCalculator from "../src/ageCalculator";

describe('AgeCalculator', () => {

  test('Should accept an integer age in constructor and set to property this.age.', () => {
    const calc = new AgeCalculator(34);
    expect(calc.age).toEqual(34);
  });

  test('Should set this.age to null when given other than a number as input.', () => {
    const stringcalc = new AgeCalculator('thirty four');
    expect(stringcalc.age).toEqual(null);
  });

  test('Should set this.age to null when given NaN or +-Infinity as input.', () => {
    const nancalc = new AgeCalculator(NaN);
    const infcalc = new AgeCalculator(Infinity);
    const neginfcalc = new AgeCalculator(-Infinity);
    expect(nancalc.age).toEqual(null);
    expect(infcalc.age).toEqual(null);
    expect(neginfcalc.age).toEqual(null);
  });

  test('Should calculate ages on other planets in constructor, set to properties.', () => {
    const calc = new AgeCalculator(100);
    expect(calc.mercuryAge).toEqual(416);
    expect(calc.venusAge).toEqual(161);
    expect(calc.marsAge).toEqual(53);
    expect(calc.jupiterAge).toEqual(8);
  });

  test('earthToMercury method should accept a number of Earth years and return Mercury years.', () => {
    const calc = new AgeCalculator("foo");
    expect(calc.earthToMercury(100)).toEqual(416);
  });

  test('earthToVenus method should accept a number of Earth years and return Venus years.', () => {
    const calc = new AgeCalculator("foo");
    expect(calc.earthToVenus(100)).toEqual(161);
  });

  test('earthToMars method should accept a number of Earth years and return Mars years.', () => {
    const calc = new AgeCalculator("foo");
    expect(calc.earthToMars(100)).toEqual(53);
  });

  test('earthToJupiter method should accept a number of Earth years and return Jupiter years.', () => {
    const calc = new AgeCalculator("foo");
    expect(calc.earthToJupiter(100)).toEqual(8);
  });

  test('given a second argument in constructor, should create a child AgeCalculator for life expectancy', () => {
    const calc = new AgeCalculator(34, 100);
    expect(calc.lifeExpCalc).toBeInstanceOf(AgeCalculator);
  })

  test('yearsToLive method should return an array in format ["remain"||"passed", Mercury years, Venus years, Earth years, Mars years, Jupiter years]', () => {
    const remain = new AgeCalculator(34, 100);
    expect(remain.yearsToLive()).toEqual(['remain', 275, 107, 66, 35, 6]);
    const passed = new AgeCalculator(34, 20);
    expect(passed.yearsToLive()).toEqual(['passed', 58, 22, 14, 8, 1]);
  });

  test('yearsToLive method should return null if called on AgeCalculator with no lifeExpCalc child', () => {
    const calc = new AgeCalculator(34);
    expect(calc.yearsToLive()).toEqual(null);
  });
});