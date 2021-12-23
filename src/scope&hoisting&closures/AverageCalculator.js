//  Create  a function  runningAverage()  that  returns a callable  function  object. Update  the
//  series  with  each  given value and calculate the current average.
//    rAvg  = runningAverage();
//    rAvg(10)  = 10.0;
//    rAvg(11)  = 10.5;
//    rAvg(12)  = 11;

const runningAverage = () => {
  let currentSum = 0;
  let numbersCount = 0;

  const calculateAverage = (newNumber) => {
    numbersCount++;
    currentSum += newNumber;

    return currentSum / numbersCount;
  };

  return calculateAverage;
};

export default runningAverage;
