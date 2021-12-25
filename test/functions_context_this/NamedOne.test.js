import NamedOne from "../../src/functions_context_this/NamedOne";

describe("NamedOne", () => {
  const initialData = {
    firstName: "Naomi",
    lastName: "Wang",
    fullName: "Naomi Wang",
  };

  let namedOne;

  beforeEach(() => {
    namedOne = new NamedOne(initialData.firstName, initialData.lastName);
  });

  test("should correctly setup an object with initial data", () => {
    // assert
    expect(namedOne.firstName).toBe(initialData.firstName);
    expect(namedOne.lastName).toBe(initialData.lastName);
    expect(namedOne.fullName).toBe(initialData.fullName);
  });

  test("should change full name correspondingly if first or last (or both) name is changed", () => {
    // arrange
    const johnDoeData = {
      firstName: "John",
      lastName: "Doe",
      fullName: "John Doe",
    };

    // act
    namedOne.firstName = johnDoeData.firstName;
    namedOne.lastName = johnDoeData.lastName;

    // assert
    expect(namedOne.firstName).toBe(johnDoeData.firstName);
    expect(namedOne.lastName).toBe(johnDoeData.lastName);
    expect(namedOne.fullName).toBe(johnDoeData.fullName);
  });

  test("should change first and last names if full name is changed", () => {
    // arrange
    const billSmithData = {
      firstName: "Bill",
      lastName: "Smith",
      fullName: "Bill Smith",
    };

    // act
    namedOne.fullName = billSmithData.fullName;

    // assert
    expect(namedOne.firstName).toBe(billSmithData.firstName);
    expect(namedOne.lastName).toBe(billSmithData.lastName);
    expect(namedOne.fullName).toBe(billSmithData.fullName);
  });

  test("should not change first, last and full names if full name is changed, but value is without empty space", () => {
    // arrange
    const incorrectFullName = "TomDonnovan";

    // act
    namedOne.fullName = incorrectFullName;

    // assert
    expect(namedOne.firstName).toBe(namedOne.firstName);
    expect(namedOne.lastName).toBe(namedOne.lastName);
    expect(namedOne.fullName).not.toBe(incorrectFullName);
  });
});
