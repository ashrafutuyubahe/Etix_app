const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const Driver = require("../models/driverModel");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
const connection = require("../dbconnection");
const mongoose = require("mongoose");

Router.post("/driverLogin", async (req, res) => {
  try {
    const { driverName, driverPassword, driverCar,driverAgency } = req.body;

    if (!driverName || !driverPassword || !driverCar || !driverAgency) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const driver = await Driver.findOne({ driverName, driverCar,driverAgency });

    if (!driver) {
      return res.status(400).json({ error: "Invalid Name, Car, or Password" });
    }

    const validPassword = await bcrypt.compare(driverPassword, driver.driverPassword);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid Name, Car, or Password" });
    }

    const token = jwt.sign({ driverId: driver._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.header("Authorization", "Bearer " + token).json({ message: "Logged in successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = Router;
