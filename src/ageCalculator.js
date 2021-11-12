export default class AgeCalculator {
  constructor(age) {
    if (typeof age !== 'number' || age !== age || age === Infinity || age === -Infinity) {
      this.age = null;
    } else {
      this.age = age;
    }
    this.mercuryAge = Math.floor(age/.24);
    this.venusAge = Math.floor(age/.62);
    this.marsAge = Math.floor(age/1.88);
    this.jupiterAge = Math.floor(age/11.86);
  }


}