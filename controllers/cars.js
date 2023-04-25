const Car = require("../models/Car");

const index = async (req, res) => {
    const cars = await Car.all;
    res.send(cars);
}

const findById = async (req, res) => {
    try {
        const cars = await Car.findById(req.params.id);
        res.send(cars);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }

}

module.exports = { index, findById };
