// This file is for local development and debugging.
// If you want to test the results of homeworks - please, run 'npm test' command in console

import Vector from "./classes_constructor_new/Vector.js";

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);
const d = new Vector();
const e = new Vector([1, 2, 3]);

console.log(a.add(b), "should return a new Vector([4, 6, 8])");
console.log(a.subtract(b), "should return a new Vector([-2, -2, -2])");
console.log(a.dot(b), "should return 1*3 + 2*4 + 3*5 = 26");
console.log(
  a.norm(),
  `should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14) -> ${Math.sqrt(14)}`
);
console.log(a.toString(), "should return '(1, 2, 3)'");

// equality
console.log(a.equals(b), "should return false");
console.log(a.equals(e), "should return true");
