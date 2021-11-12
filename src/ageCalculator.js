export default class AgeCalculator {
  constructor(age) {
    if (typeof age !== 'number' || age !== age || age === Infinity || age === -Infinity) {
      this.age = null;
    } else {
      this.age = age;
    }
  }
}