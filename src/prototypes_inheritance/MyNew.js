// From MSDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
// When the code new Foo(...) is executed, the following things happen:
// 1) A new object is created, inheriting from Foo.prototype.
// 2) The constructor function Foo is called with the specified arguments, and with this bound to the newly created object.
//    new Foo is equivalent to new Foo(), i.e. if no argument list is specified, Foo is called without arguments.
// 3) The object (not null, false, 3.1415 or other primitive types) returned by the constructor function becomes the result
//    of the whole new expression. If the constructor function doesn't explicitly return an object, the object created in step 1
//    is used instead (normally constructors don't return a value, but they can choose to do so if they want to override
//    the normal object creation process).

const myNew = (ctr, ...ctrArgs) => {
  const that = Object.create(ctr.prototype);

  const obj = ctr.apply(that, ctrArgs);

  return obj && typeof obj === "object" ? obj : that;
};

export default myNew;
