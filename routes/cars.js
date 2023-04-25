const express = require("express");

const carsController = require("../controllers/cars");
const router = express.Router();

router.get("/", carsController.index);
router.get("/:id", carsController.findById);
router.post("/", carsController.create);
router.patch("/:make", carsController.update);
router.delete("/:id", carsController.destroy);



module.exports = router;
