const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const Driver = require("../models/driverModel");
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";
const connection = require("../dbconnection");
const mongoose = require("mongoose");
const joi= require("joi");




/**
 * @swagger
 * tags:
 *   name: Drivers
 *   description: Driver management
 */

/**
 * @swagger
 * /driverLogin:
 *   post:
 *     tags: [Drivers]
 *     summary: Login a driver
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               driverName:
 *                 type: string
 *                 example: "JohnDoe"
 *               driverPassword:
 *                 type: string
 *                 example: "Password123!"
 *               driverCar:
 *                 type: string
 *                 example: "RAB 123C"
 *               driverAgency:
 *                 type: string
 *                 example: "AgencyName"
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         headers:
 *           Authorization:
 *             description: JWT token
 *             type: string
 *             example: "Bearer eyJhbGciOiJIUzI1NiIsInR..."
 *       400:
 *         description: Invalid input or credentials
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     tags: [Drivers]
 *     summary: Logout a driver
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       400:
 *         description: No token provided
 */

/**
 * @swagger
 * /AddDrivers:
 *   post:
 *     tags: [Drivers]
 *     summary: Add a new driver
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               driverName:
 *                 type: string
 *                 example: "JaneDoe"
 *               driverPassword:
 *                 type: string
 *                 example: "SecurePassword456"
 *               driverCar:
 *                 type: string
 *                 example: "RAB 456C"
 *               driverAgency:
 *                 type: string
 *                 example: "OtherAgency"
 *     responses:
 *       201:
 *         description: Driver added successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /getDrivers:
 *   get:
 *     tags: [Drivers]
 *     summary: Get all drivers
 *     responses:
 *       200:
 *         description: List of drivers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   driverName:
 *                     type: string
 *                     example: "JohnDoe"
 *                   driverCar:
 *                     type: string
 *                     example: "RAB 123C"
 *                   driverAgency:
 *                     type: string
 *                     example: "AgencyName"
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /getDrivers/{id}:
 *   get:
 *     tags: [Drivers]
 *     summary: Get a driver by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Driver ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Driver found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 driverName:
 *                   type: string
 *                   example: "JohnDoe"
 *                 driverCar:
 *                   type: string
 *                   example: "RAB 123C"
 *                 driverAgency:
 *                   type: string
 *                   example: "AgencyName"
 *       404:
 *         description: Driver not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /deleteDriver/{id}:
 *   delete:
 *     tags: [Drivers]
 *     summary: Delete a driver by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Driver ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Driver deleted successfully
 *       404:
 *         description: Driver not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /updateDriver/{id}:
 *   put:
 *     tags: [Drivers]
 *     summary: Update a driver by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Driver ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               driverName:
 *                 type: string
 *                 example: "JohnDoeUpdated"
 *               driverPassword:
 *                 type: string
 *                 example: "NewPassword789"
 *               driverCar:
 *                 type: string
 *                 example: "RAB 789C"
 *               driverAgency:
 *                 type: string
 *                 example: "UpdatedAgency"
 *     responses:
 *       200:
 *         description: Driver updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Driver not found
 *       500:
 *         description: Internal server error
 */


//driver authenticaton
const driverSchema = joi.object({
  driverName: joi.string().min(3).max(30).required(),
  driverPassword: joi.string().required(),
   driverCar: joi.string().required(),
   driverAgency:joi.string().required()
});


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
      expiresIn: "4min",
    });

    res
      .header("Authorization", "Bearer " + token)
      .json({ message: "Logged in successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


const blacklist = new Set();


const checkBlacklist = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (blacklist.has(token)) {
    return res.status(401).json({ error: 'Token is invalid' });
  }
  next();
};


Router.post('/logout', (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (token) {
    blacklist.add(token);
    res.json({ message: 'Logged out successfully' });
  } else {
    res.status(400).json({ error: 'No token provided' });
  }
});




Router.post("/AddDrivers", async (req, res) => {
  const { error } = driverSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const { driverName, driverPassword, driverCar, driverAgency } = req.body;

   
    const existingDriver = await Driver.findOne({ driverName, driverCar });
    if (existingDriver) {
      return res.status(400).json({ error: "Driver with that name and car already exists" });
    }
 
    const hashedPassword = await bcrypt.hash(driverPassword, 10);
    
    const newDriver = new Driver({
      driverName,
      driverPassword: hashedPassword,
      driverCar,
      driverAgency
    });

    
    await newDriver.save();

    return res.status(201).json({ message: "Driver has been added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});





Router.get("/getDrivers", async (req, res) => {
  try {
    const getAlldrivers = await Driver.find();
    if (!getAlldrivers) {
      return res.status(4041).send("failed to get  drivers");
    }

    return res.status(200).json({getAlldrivers});
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

Router.get("/getDrivers/:id", async (req, res) => {
  try {

    const {id}= req.params

    const getDriver = await Driver.findById(id);

    if (!getDriver) {
      return res.status(4041).send("No  such  driver  found ");
    }
 
    return res.status(200).json({getDriver});
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});




Router.delete("/deleteDriver/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const findDriverwithIdAndDelete = await Driver.findByIdAndDelete(id);

    if (!findDriverwithIdAndDelete) {
      return res.status(401).send("No such found");
    }

    return res.status(200).send("the Driver has been deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



Router.put("/updateDriver/:id", async (req, res) => {
  const {id}= req.params
  const {
    driverName,
    driverPassword,
    driverCar,
    driverAgency
  } = req.body;

  if (!driverName ||
      !driverPassword ||
      !driverCar ||
      !driverAgency
     ){
    return res.status(400).json({ error: "All fields are required" });
  }


  const checkDriverExistsWIthId= await Driver.findById(id);
  if(!checkDriverExistsWIthId){
    res.status(401).send('failed to update the driver because the Driver is not found')
  }

  const updatedDriver={
    driverName,
    driverPassword,
    driverCar,
    driverAgency
  }
  
  const updatedDriverQuery= await Driver.findByIdAndUpdate(id,updatedDriver);

  if(!updatedDriverQuery){
  return  res.status(401).json({error:'failed to update the Driver'})
  }

  return res.status(200).json({message:'updating the Driver has been made successfully'});


});



module.exports = Router;
