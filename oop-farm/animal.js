class Animal {
    constructor(age) {
      this.age = age
    }

    getWeightInKg() {
        return Math.min(this.age * this.coef, this.maxWeight)
    }

    getValueInEuros() {
        return this.getWeightInKg() * this.price
    }
}

class Pig extends Animal {
    constructor(age) {
        super(age),
        this.coef = 2.3,
        this.maxWeight = 700,
        this.price = 4
    }
}

class Cow extends Animal {
    constructor(age) {
        super(age),
        this.coef = 1.5,
        this.maxWeight = 1200,
        this.price = 5
    }
}

class Horse extends Animal {
    constructor(age) {
        super(age),
        this.coef = 1.7,
        this.maxWeight = 1000,
        this.price = 10
    }
}

module.exports = { Animal, Pig, Cow, Horse }
