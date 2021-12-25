import sum from "../../src/scope_hoisting_closures/CurryingSum.js";

test("CurryingSum - should return correct sum for (2, 3) type of call", () => {
  // arrange
  const args = [2, 3];
  const expectedResult = 5;

  // act
  const result = sum(...args)();

  // assert
  expect(result).toBe(expectedResult);
});

test("CurryingSum - should return correct sum for (2)(3) type of call", () => {
  // arrange
  const expectedResult = 5;

  // act
  const result = sum(2)(3)();

  // assert
  expect(result).toBe(expectedResult);
});

test("CurryingSum - should return correct sum for (1)(2)(3)(4) type of call", () => {
  // arrange
  const expectedResult = 10;

  // act
  const result = sum(1)(2)(3)(4)();

  // assert
  expect(result).toBe(expectedResult);
});

test("CurryingSum - should return correct sum for (1)(2, 3)(3, 4, 5)(6) type of call", () => {
  // arrange
  const expectedResult = 24;

  // act
  const result = sum(1)(2, 3)(3, 4, 5)(6)();

  // assert
  expect(result).toBe(expectedResult);
});
