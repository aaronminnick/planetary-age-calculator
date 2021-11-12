export default class AgeCalculator {
  constructor(age) {
    if (typeof age !== 'number') {
      this.age = null;
    } else {
      this.age = age;
    }
  }
}