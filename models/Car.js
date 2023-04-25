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

    static async create(data) {
        try {
            let newId;
            cars.length
                ? newId = cars.reduce((car1, car2) => car1.id > car2.id ? car1.id : car2.id) + 1
                : newId = 1;

            const car = cars.find(car => car.make === data.make);

            if (!car) {
                const newCar = new Car({ ...data, id: newId });
                cars.push(newCar);
                return newCar;
            }
            else {
                throw new Error("Car already exists.");
            }
        } catch (error) {
            throw (error.message);
        }
    }

    static async update(data) {
        try {

            const car = cars.find(car => car.make.toLowerCase() === data.params.make.toLowerCase());
            if (!car) {
                throw new Error("Car does not exist.");
            }
            const updatedCar = new Car({ ...data.body, make: (data.body.make), id: car.id })
            const newIndex = cars.findIndex(i => i.id === car.id);
            cars[newIndex] = updatedCar;
            return updatedCar;

        } catch (error) {
            throw (error.message);
        }
    }

}





module.exports = Car;
