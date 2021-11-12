import { exportAllDeclaration } from "@babel/types";
import { testPathPatternToRegExp } from "jest-util";
import AgeCalculator from "../src/ageCalculator";

describe('AgeCalculator', () => {

  test('should accept an integer age in constructor and set to property this.age', () => {
    calc = new AgeCalculator(34);
    expect(calc.age).toEqual(34);
  });
});