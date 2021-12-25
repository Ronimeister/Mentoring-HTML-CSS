function NamedOne(firstName, lastName) {
  return {
    firstName,
    lastName,

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(newFullName) {
      const nameParts = newFullName.split(" ");

      if (nameParts.length === 2) {
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
      }
    },
  };
}

export default NamedOne;
//     const incorrectFullName1 = "Tom";

//     namedOne.fullName = incorrectFullName1;

//     console.log(
//       `Is full name equals to ${incorrectFullName1} - ${
//         namedOne.fullName === incorrectFullName1
//       }`
//     );

//     const incorrectFullName2 = "TomDonnovan";

//     namedOne.fullName = incorrectFullName2;

//     console.log(
//       `Is full name equals to ${incorrectFullName2} - ${
//         namedOne.fullName === incorrectFullName2
//       }`
//     );
