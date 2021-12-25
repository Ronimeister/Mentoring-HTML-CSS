import Vector from "../../src/classes_constructor_new/Vector.js";

describe("NamedOne", () => {
  let initialVector;

  beforeEach(() => {
    initialVector = new Vector([1, 2, 3]);
  });

  test("should summarize vectors correctly", () => {
    // arrange
    const otherVector = new Vector([3, 4, 5]);
    const expectedVector = new Vector([4, 6, 8]);

    // act
    const resultVector = initialVector.add(otherVector);

    // assert
    expect(resultVector.equals(expectedVector)).toBeTruthy();
  });

  test("should substract vectors correctly", () => {
    // arrange
    const otherVector = new Vector([3, 4, 5]);
    const expectedVector = new Vector([-2, -2, -2]);

    // act
    const resultVector = initialVector.subtract(otherVector);

    // assert
    expect(resultVector.equals(expectedVector)).toBeTruthy();
  });

  test("should dot vectors correctly", () => {
    // arrange
    const otherVector = new Vector([3, 4, 5]);
    const expectedResult = 26;

    // act
    const result = initialVector.dot(otherVector);

    // assert
    expect(result).toBe(expectedResult);
  });

  test("should norm vectors correctly", () => {
    // arrange
    const expectedResult = Math.sqrt(14);

    // act
    const result = initialVector.norm();

    // assert
    expect(result).toBe(expectedResult);
  });

  test("should toString vectors correctly", () => {
    // arrange
    const expectedResult = "(1, 2, 3)";

    // act
    const result = initialVector.toString();

    // assert
    expect(result).toBe(expectedResult);
  });

  test("two vectors with the same components should be equal", () => {
    // arrange
    const otherVector = new Vector([1, 2, 3]);

    // act
    const result = initialVector.equals(otherVector);

    // assert
    expect(result).toBeTruthy();
  });

  test("two vectors with the same components but different order should be not equal", () => {
    // arrange
    const otherVector = new Vector([3, 2, 1]);

    // act
    const result = initialVector.equals(otherVector);

    // assert
    expect(result).toBeFalsy();
  });

  test("two vectors with different components should be not equal", () => {
    // arrange
    const otherVector = new Vector([3, 4, 5]);

    // act
    const result = initialVector.equals(otherVector);

    // assert
    expect(result).toBeFalsy();
  });
});
