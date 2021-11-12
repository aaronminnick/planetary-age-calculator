export default class AgeCalculator {
  constructor(age, lifeExpect = 0) {
    if (typeof age !== 'number' || age !== age || age === Infinity || age === -Infinity) {
      this.age = null;
    } else {
      this.age = age;
    }
    this.mercuryAge = this.earthToMercury(age);
    this.venusAge = this.earthToVenus(age);
    this.marsAge = this.earthToMars(age);
    this.jupiterAge = this.earthToJupiter(age);

    if (lifeExpect > 0) {
      this.lifeExpCalc = new AgeCalculator(lifeExpect);
    }
  }

  earthToMercury(years) {
    return Math.floor(years/.24);
  }

  earthToVenus(years) {
    return Math.floor(years/.62);
  }

  earthToMars(years) {
    return Math.floor(years/1.88)
  }
  earthToJupiter(years) {
    return Math.floor(years/11.86)
  }
}