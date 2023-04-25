const Car = require("../models/Car");

const index = async (req, res) => {
    const cars = await Car.all;
    res.send(cars);
}

const show = async (req, res) => {
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

const destroy = async (req, res) => {
    try {
        const carId = parseInt(req.params.id);
        const car = await Car.findById(carId);
        await car.destroy();
        res.sendStatus(204);
    } catch (error) {
        res.status(404).send({ error: err.message });
    }
}


module.exports = { index, show, create, update, destroy };
