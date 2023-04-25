const cars = require("../data/cars.json");

class Car {
    constructor(data) {
        this.make = data.make
        this.id = data.id
    }

    static get all() {
        return cars.map(car => new Car(car));
    }

    static async findById(carsId) {
        try {
            const idx = parseInt(carsId);
            const car = cars.find(car => car.id === idx);
            return new Car(car);
        } catch (error) {
            throw new Error("Car not found.")
        }

    }

}

module.exports = Car;
