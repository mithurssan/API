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


// //POST /cars
// app.post("/cars", (req, res) => {
//     let newId = cars.reduce((car1, car2) => car1.id > car2.id ? car1.id : car2.id) + 1;
//     const car = cars.find(car => car.make === req.body.make);

//     if (!car) {
//         const newCar = { ...req.body, id: newId };
//         cars.push(newCar);

//         fs.writeFile("cars.json", JSON.stringify(cars), err => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.status(201).send(newCar);
//             }
//         })
//     }
//     else {
//         res.status(409).send({ error: "This car already exists!" })
//     }
// })

// //PATCH /cars/:make
// app.patch("/cars/:make", (req, res) => {
//     const car = cars.find(car => car.make.toLowerCase() === req.params.make.toLowerCase());

//     if (!car) {
//         return res.status(404).send({ error: "This car does not exist!" });
//     }

//     try {
//         const updatedCar = { ...req.body, make: (req.body.make), id: car.id }

//         const newIndex = cars.findIndex(i => i.id === car.id);
//         cars[newIndex] = updatedCar;

//         fs.writeFile("cars.json", JSON.stringify(cars), err => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.status(200).send({ "updated to": updatedCar });
//             }
//         })

//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// })

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
