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
