const express = require("express");
const Router = express.Router();
const TicketScheduleModel = require("../models/scheduleModel");
const dbconnection= require('../dbconnection');

Router.post("/addSchedule", async (req, res) => {
  try {
    const {
      carPlate,
      origin,
      destination,
      departureTime,
      arrivalTime,
      cost,
      driverName,
    } = req.body;

    
    if (!carPlate || !origin || !destination || !departureTime || !arrivalTime || !cost || !driverName) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newSchedule = new TicketScheduleModel({
      carPlate,
      origin,
      destination,
      departureTime,
      arrivalTime,
      cost,
      driverName,
    });

    
    const findScheduleExists = await TicketScheduleModel.findOne({
      carPlate,
      origin,
      destination,
      departureTime,
      arrivalTime,
      cost,
      driverName,
    });

    if (findScheduleExists) {
      return res
        .status(409)
        .json({ error: "A similar schedule already exists" });
    }

    
    await newSchedule.save();
    res.status(201).json({ message: "Schedule added successfully" });
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: "Internal server error" });
  }
});

module

module.exports = Router;
