import { exportAllDeclaration } from "@babel/types";
import { testPathPatternToRegExp } from "jest-util";
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

  
});