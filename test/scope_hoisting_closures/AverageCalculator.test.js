import runningAverage from "../../src/scope_hoisting_closures/AverageCalculator.js";

test("AverageCalculator - should return correct average sum on each step", () => {
  // arrange
  const rAvg = runningAverage();

  const args = [10, 11, 12];
  const expectations = [10, 10.5, 11];

  // act + assert
  for (let i = 0; i < args.length; i++) {
    const currentAvg = rAvg(args[i]);

    expect(currentAvg).toBe(expectations[i]);
  }
});
