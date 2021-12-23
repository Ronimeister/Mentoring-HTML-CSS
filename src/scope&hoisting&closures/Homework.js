import runningAverage from "./AverageCalculator.js";
import sum from "./CurryingSum.js";

const runFirstTask = () => {
  const rAvg = runningAverage();

  console.log("First task's results: ");
  console.log(rAvg(10), " - should be equal to 10");
  console.log(rAvg(11), " - should be equal to 10.5");
  console.log(rAvg(12), " - should be equal to 11");
};

const runSecondTask = () => {
  const result1 = sum(2, 3)();
  const result2 = sum(2)(3)();
  const result3 = sum(1)(2)(3)(4)();

  console.log("Second task's results: ");
  console.log(result1, " - should be 5");
  console.log(result2, " - should be 5");
  console.log(result3, " - should be 10");
};

const runScopeHoistingClosuresTasks = () => {
  runFirstTask();
  console.log("--------------");
  runSecondTask();
};

export default runScopeHoistingClosuresTasks;
