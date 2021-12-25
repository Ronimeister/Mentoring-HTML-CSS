class Vector {
  constructor(components) {
    this.components = components || [];
  }

  #validateVector(target) {
    if (!(target instanceof Vector)) {
      throw Error("Passed argument is not an instance of Vector class!");
    }

    if (target.components.length !== this.components.length) {
      throw Error(
        "Target vector's components count is not equal to current components count!"
      );
    }

    if (target.components.some((value) => isNaN(value))) {
      throw Error("Target vector's components should only contain numbers!");
    }
  }

  #validateVectorBool(target) {
    try {
      this.#validateVector(target);
    } catch (error) {
      return false;
    }

    return true;
  }

  add(otherVector) {
    this.#validateVector(otherVector);

    const summedComponents = this.components.map(
      (value, i) => value + otherVector.components[i]
    );

    return new Vector(summedComponents);
  }

  subtract(otherVector) {
    this.#validateVector(otherVector);

    const substractedComponents = this.components.map(
      (value, i) => value - otherVector.components[i]
    );

    return new Vector(substractedComponents);
  }

  dot(otherVector) {
    this.#validateVector(otherVector);

    const dottedComponents = this.components.map(
      (value, i) => value * otherVector.components[i]
    );

    return dottedComponents.reduce((acc, value) => acc + value, 0);
  }

  norm() {
    const sumOfSqrts = this.components.reduce(
      (acc, value) => acc + value * value,
      0
    );

    return Math.sqrt(sumOfSqrts);
  }

  toString() {
    return `(${this.components.join(", ")})`;
  }

  equals(otherVector) {
    const validationResult = this.#validateVectorBool(otherVector);
    if (validationResult) {
      return this.components.every(
        (value, i) => value === otherVector.components[i]
      );
    }

    return false;
  }
}

export default Vector;
