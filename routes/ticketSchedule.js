const express = require("express");
const Router = express.Router();
const TicketScheduleModel = require('../models/scheduleModel')
const dbconnection = require("../dbconnection");

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
      agency,
    } = req.body;

    if(!carPlate ||!origin ||!destination || !departureTime ||!arrivalTime ||!cost ||!driverName,!agency) {
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
      agency,
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
        .status(401)
        .json({ error: "A similar schedule already exists"});
    }

     if(await newSchedule.save()) return  res.status(201).json({ message: "Schedule added successfully" });
     return res.status(400).send('failed to add ticket schedule');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});




Router.get("/findschedule", async (req, res) => {
  try {
    const { origin, destination, agency } = req.query;

    if (!agency || !origin || !destination) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const retrieveAllTicketSchedule = await TicketScheduleModel.find({ origin, destination, agency });

    if (retrieveAllTicketSchedule.length === 0) {
      return res.status(404).json({
        message: "No tickets schedule found for the specified route and agency",
      });
    }
    
    return res.status(200).json(retrieveAllTicketSchedule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


Router.put("/updateSchedule/:id", async (req, res) => {
  const {id}= req.query
  const {
    newCarPlate,
    newOrigin,
    newDestination,
    newDepartureTime,
    newArrivalTime,
    newCost,
    newDriverName,
    newAgency,
  } = req.body;

  if (
    (!newCarPlate ||
      !newOrigin ||
      !newDestination ||
      !newDepartureTime ||
      !newArrivalTime ||
      !newCost ||
      !newDriverName,
    !newAgency)
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }


  const checkScheduleExistsWIthId= await TicketScheduleModel.findOne({id});
  if(!checkScheduleExistsWIthId){
    res.status(401).send('failed to update the schedule because then schedule is not found')
  }

  const updatedSchedule={
    carPlate:newCarPlate,
    origin:newOrigin,
    destination:newDestination,
    departureTime:newDepartureTime,
    arrivalTime:newArrivalTime,
    cost:newCost,
    driverName:newDriverName,
  }
  
  const updatedScheduleQuery= await TicketScheduleModel.findByIdAndUpdate(id,updatedSchedule);

  if(!updatedScheduleQuery){
  return  res.status(401).send('failed to update the schedule')
  }

  return res.status(200).send('updating schedule has been made successfully');


});


module.exports = Router;
