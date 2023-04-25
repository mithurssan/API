const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const carRoutes = require("./routes/cars");

//main page
app.get("/", (req, res) => {
    res.send("Welcome to the cars API!");
})

app.use("/cars", carRoutes);


module.exports = app;
