const express = require("express");
const cors = require("cors");
const fs = require('fs');
// const cars = require("./cars.json");

const app = express();

app.use(cors());
app.use(express.json());

const carRoutes = require("./routes/cars");

//main page
app.get("/", (req, res) => {
    res.send("Welcome to the cars API!");
})

app.use("/cars", carRoutes);





// //DELETE /cars/:make
// app.delete("/cars/:make", (req, res) => {
//     const make = req.params.make.toLowerCase();

//     const carIndex = cars.findIndex(car => car.make.toLowerCase() === make);

//     if (carIndex === -1) {
//         res.status(404).send({ error: "This car does not exist!" })
//     } else {
//         cars.splice(carIndex, 1);

//         fs.writeFile("cars.json", JSON.stringify(cars), err => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.status(204).send();
//             }
//         })
//     }
// })

module.exports = app;
