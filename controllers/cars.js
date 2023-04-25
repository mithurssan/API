const Car = require("../models/Car");

const index = async (req, res) => {
    const cars = await Car.all;
    res.send(cars);
}

const findById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.send(car);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }

}

const create = async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(201).send(newCar);
    } catch (error) {
        res.status(422).send({ error: "Car already exists." });
    }
}

const update = async (req, res) => {
    try {
        const updatedCar = await Car.update(req);
        res.status(201).send(updatedCar);
    } catch (error) {
        res.status(400).send({ error: "Car does not exist." })
    }
}




module.exports = { index, findById, create, update };
