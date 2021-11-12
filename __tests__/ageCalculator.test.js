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

});