const cars = require("../data/cars.json");

class Car {
    constructor(data) {
        this.make = data.make
        this.id = data.id
    }

    static get all() {
        return cars.map(car => new Car(car));
    }
}

module.exports = Car;
