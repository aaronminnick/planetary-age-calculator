export default class AgeCalculator {
  constructor(age) {
    if (typeof age !== 'number' || age !== age || age === Infinity || age === -Infinity) {
      this.age = null;
    } else {
      this.age = age;
    }
    this.mercuryAge = this.earthToMercury(age);
    this.venusAge = Math.floor(age/.62);
    this.marsAge = Math.floor(age/1.88);
    this.jupiterAge = Math.floor(age/11.86);
  }

  earthToMercury(years) {
    return Math.floor(years/.24);
  }

  earthToVenus(years) {

  }

  earthToMars(years) {

  }
  earthToJupiter(years) {

  }
}