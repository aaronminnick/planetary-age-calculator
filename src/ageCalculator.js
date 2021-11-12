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

  yearsToLive() {
    let outputArray = [];
    outputArray.push(this.lifeExpCalc.mercuryAge - this.mercuryAge);
    outputArray.push(this.lifeExpCalc.venusAge - this.venusAge);
    outputArray.push(this.lifeExpCalc.age - this.age);
    outputArray.push(this.lifeExpCalc.marsAge - this.marsAge);
    outputArray.push(this.lifeExpCalc.jupiterAge - this.jupiterAge);

    if (outputArray[0] >= 0) {
      outputArray.unshift('remain');
    } else {
      outputArray = outputArray.map(element => Math.abs(element));
      outputArray.unshift('passed');
    }

    return outputArray;
  }
}