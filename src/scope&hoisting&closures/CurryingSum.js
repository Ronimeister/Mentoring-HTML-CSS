// Write  a sum function  which will  work  properly  when  invoked using syntax  below.
//    sum(2,3);   //  Outputs 5
//    sum(2)(3);  //  Outputs 5
//    sum(1)(2)(3)(4);  //  Outputs 10

const calculateSum = (...args) => args.reduce((acc, el) => acc + el, 0);

const curry = (func) => {
  let argsArray = [];

  const curried = (...args) => {
    if (args.length === 0) {
      const newArgsArr = argsArray.slice();
      argsArray = [];

      return func(...newArgsArr);
    }

    const newArgs = args.length > 1 ? func(...args) : args;

    argsArray = argsArray.concat(newArgs);

    return (...args2) => curried.apply(this, args2);
  };

  return curried;
};

const sum = curry(calculateSum);

export default sum;
