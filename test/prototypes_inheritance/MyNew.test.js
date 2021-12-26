import myNew from "../../src/prototypes_inheritance/MyNew.js";
import Person from "../../src/prototypes_inheritance/Person.js";

describe("MyNew", () => {
  let john, jack;

  beforeEach(() => {
    john = new myNew(Person, "John", 30);
    jack = new Person("Jack", 40);
  });

  test("should inherit introduce function from Person prototype", () => {
    // arrange
    const expectedIntroduction = "My name is John and I am 30";

    // act
    const actualIntroduction = john.introduce();

    // assert
    expect(actualIntroduction).toEqual(expectedIntroduction);
  });

  test("should be the same type as instance of Person func", () => {
    // arrange
    const expectedType = typeof jack;

    // act
    const actualType = typeof john;

    // assert
    expect(actualType).toEqual(expectedType);
  });

  test("should be the instance of Person func", () => {
    // act
    const actualResult = john instanceof Person;

    // assert
    expect(actualResult).toBeTruthy();
  });
});
