const Car = require("../models/Car");

const index = async (req, res) => {
    const cars = await Car.all;
    res.send(cars);
}

module.exports = { index };
