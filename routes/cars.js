const express = require("express");

const carsController = require("../controllers/cars");
const router = express.Router();

router.get("/", carsController.index);
router.get("/:id", carsController.findById);


module.exports = router;
