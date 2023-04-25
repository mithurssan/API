const express = require("express");

const carsController = require("../controllers/cars");
const router = express.Router();

router.get("/", carsController.index);

module.exports = router;
