function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return "My name is " + this.name + " and I am " + this.age;
};

export default Person;
