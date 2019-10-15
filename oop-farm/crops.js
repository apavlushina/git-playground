class Crop {
    constructor(acres) {
      this.acres = acres
    }

    getYieldInEuros() {
        return this.getYieldInKg() * this.price;
    }

    getYieldInKg() {
        if(!this.yieldPerAcre || !this.growthFactor){
            throw new Error('Growth data missing from crop, sorry')
        }
        return Math.pow(this.acres * this.yieldPerAcre, this.growthFactor)
    }

    getCosts() {
        return this.acres * this.costs;
    }
  }

class Wheat extends Crop {
    constructor(acres) {
        super(acres),
        this.price = 1.5,
        this.yieldPerAcre = 1.5,
        this.growthFactor = 1.3,
        this.costs = 340
      }
  }

  class Sugarcane extends Crop  {
    constructor(acres) {
        super(acres),
        this.price = 2,
        this.yieldPerAcre = 2.6,
        this.growthFactor = 1.1,
        this.costs = 166
      }
  }

  module.exports = { Wheat, Crop, Sugarcane }
