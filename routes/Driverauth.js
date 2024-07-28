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
    const { driverName, driverPassword, driverCar, driverAgency } = req.body;

    if (!driverName || !driverPassword || !driverCar || !driverAgency) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const driver = await Driver.findOne({
      driverName,
      driverCar,
      driverAgency,
    });

    if (!driver) {
      return res.status(400).json({ error: "Invalid Name, Car, or Password" });
    }

    const validPassword = await bcrypt.compare(
      driverPassword,
      driver.driverPassword
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid Name, Car, or Password" });
    }

    const token = jwt.sign({ driverId: driver._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res
      .header("Authorization", "Bearer " + token)
      .json({ message: "Logged in successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

Router.post("/getDrivers", async (req, res) => {
  try {
    const getAlldrivers = await Driver.find();
    if (!getAlldrivers) {
      return res.status(4041).send("failed to get  drivers");
    }

    return res.status(200).json({ alldrivers: getAlldrivers });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

Router.delete("/deleteDriver/:id", async (req, res) => {
  try {
    const { id } = req.query;
    const findDriverwithIdAndDelete = await Driver.findByIdAndDelete({ id });
    if (!findDriverwithIdAndDelete) {
      return re.status(401).send("failed to delete the Driver");
    }

    return res.status(200).send("the Driver has been deleted successfully");
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



Router.put("/updateDriver/:id", async (req, res) => {
  const {id}= req.query
  const {
    newDriverName,
    newDriverPassword,
    newDriverCar,
    newDriverAgency
  } = req.body;

  if (!newDriverName ||
      !newDriverPassword ||
      !newDriverCar ||
      !newDriverAgency
     ){
    return res.status(400).json({ error: "All fields are required" });
  }


  const checkDriverExistsWIthId= await Driver.findOne({id});
  if(!checkDriverExistsWIthId){
    res.status(401).send('failed to update the driver because the Driver is not found')
  }

  const updatedDriver={
    driverName:newDriverName,
    driverPassword:newDriverPassword,
    driverCar:newDriverCar,
    driverAgency:newDriverAgency
  }
  
  const updatedDriverQuery= await TicketScheduleModel.findByIdAndUpdate(id,updatedDriver);

  if(!updatedDriverQuery){
  return  res.status(401).send('failed to update the Driver')
  }

  return res.status(200).send('updating the Driver has been made successfully');


});



module.exports = Router;
