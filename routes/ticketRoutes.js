const express = require("express");
const Router = express.Router();
const Driver = require("../models/driverModel");
const connection = require("../dbconnection");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const joi= require("joi");
const TicketSchedule= require('../routes/ticketSchedule');
const TicketScheduleModel= require('../models/scheduleModel')
const authenticateToken = require("../middlewares/userAuth");
const Ticket = require("../models/ticketsModel");
const BoughtTicket = require("../models/boughtTicketModel");


/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Ticket management
 */

/**
 * @swagger
 * /ticketsRoutes/addTicks/addTickets:
 *   post:
 *     tags: [Tickets]
 *     summary: Add a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               origin:
 *                 type: string
 *                 example: "Kigali"
 *               destination:
 *                 type: string
 *                 example: "Butare"
 *               departureTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-01T08:00:00Z"
 *               arrivalTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-01T10:00:00Z"
 *               agency:
 *                 type: string
 *                 example: "Rwanda Transport"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 2500.00
 *               driverName:
 *                 type: string
 *                 example: "John Doe"
 *               driverCarPlate:
 *                 type: string
 *                 example: "RAB 123C"
 *     responses:
 *       201:
 *         description: Ticket added successfully
 *       400:
 *         description: All fields are required
 *       401:
 *         description: A similar ticket already exists
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /ticketsRoutes/findTicks/findTickets:
 *   post:
 *     tags: [Tickets]
 *     summary: Find tickets based on origin, destination, and agency
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               origin:
 *                 type: string
 *                 example: "Kigali"
 *               destination:
 *                 type: string
 *                 example: "Butare"
 *               agency:
 *                 type: string
 *                 example: "Rwanda Transport"
 *     responses:
 *       200:
 *         description: List of tickets found
 *       400:
 *         description: Origin, destination, and agency are required
 *       404:
 *         description: No tickets found for the specified route and agency
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /ticketsRoutes/getYourBoughtTicks/getYourBoughtTicket:
 *   post:
 *     tags: [Tickets]
 *     summary: Get a bought ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 example: "JaneDoe"
 *               origin:
 *                 type: string
 *                 example: "Kigali"
 *               destination:
 *                 type: string
 *                 example: "Butare"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 2500.00
 *               departureTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-01T08:00:00Z"
 *               arrivalTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-01T10:00:00Z"
 *               vehicleNumber:
 *                 type: string
 *                 example: "RAB 123C"
 *               paymentStatus:
 *                 type: string
 *                 example: "paid"
 *               agency:
 *                 type: string
 *                 example: "Rwanda Transport"
 *     responses:
 *       201:
 *         description: Ticket bought successfully
 *       400:
 *         description: All fields are required
 *       404:
 *         description: No driver found for the provided vehicle number
 *       500:
 *         description: Failed to generate ticket
 */

/**
 * @swagger
 * /addBoughtTickets:
 *   post:
 *     tags: [Tickets]
 *     summary: Add a bought ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticketId:
 *                 type: string
 *                 example: "9f8d157b-6744-4a72-a57b-32139dbb4dc6"
 *               userName:
 *                 type: string
 *                 example: "JaneDoe"
 *               origin:
 *                 type: string
 *                 example: "Kigali"
 *               destination:
 *                 type: string
 *                 example: "Butare"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 2500.00
 *               departureTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-01T08:00:00Z"
 *               arrivalTime:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-10-01T10:00:00Z"
 *               paymentStatus:
 *                 type: string
 *                 example: "pending"
 *               qrCode:
 *                 type: string
 *                 example: "data:image/png;base64,..."
 *               vehicleNumber:
 *                 type: string
 *                 example: "RAB 123C"
 *               driverName:
 *                 type: string
 *                 example: "John Doe"
 *               agency:
 *                 type: string
 *                 example: "Rwanda Transport"
 *     responses:
 *       201:
 *         description: Ticket added successfully
 *       400:
 *         description: All required fields must be provided
 *       401:
 *         description: There are similar tickets
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /getQRcode:
 *   get:
 *     tags: [Tickets]
 *     summary: Generate a QR code
 *     responses:
 *       200:
 *         description: Successfully generated QR code
 *       500:
 *         description: Error generating QR code
 */

/**
 * @swagger
 * /scanTicket:
 *   post:
 *     tags: [Tickets]
 *     summary: Scan a ticket to validate it
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticketId:
 *                 type: string
 *                 example: "9f8d157b-6744-4a72-a57b-32139dbb4dc6"
 *               userName:
 *                 type: string
 *                 example: "JaneDoe"
 *               paymentStatus:
 *                 type: string
 *                 example: "paid"
 *     responses:
 *       200:
 *         description: Ticket is valid and paid
 *       400:
 *         description: All fields are required
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Internal server error
 */




//Ticket endpoints
Router.post("/addTickets", async (req, res) => {
    const { origin, destination, departureTime,arrivalTime, agency, price,driverName ,driverCarPlate} = req.body;
    console.log(req.body)
    if (!origin || !destination || !departureTime || !agency || !price || !arrivalTime || !driverName ) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    try {
      const newTicket = new Ticket({
        origin,
        destination,
        departureTime,
        arrivalTime,
        driverName,
        driverCarPlate,
        agency,
        price,
      });
  
       const findTicketsExists= await Ticket.findOne({
        origin,
        destination,
        departureTime,
        arrivalTime,
        driverCarPlate,
        agency,
        price
        
      })
  
      if(findTicketsExists){
         return res.status(401).send(" there is a similar ticket please add different ticket")
      }
  
  
        if( !await newTicket.save()){
          res.status(401).json({ error: "  failed  to save Ticket" });
        }
      res.status(201).json({ message: "Ticket added successfully" });
    } catch (error) {
      console.error("Error adding ticket:", error);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  Router.post("/findTickets", async (req, res) => {
    const { origin, destination, agency } = req.body;
    
    if (!origin || !destination || !agency) {
      return res
        .status(400)
        .json({ error: "Origin, destination, and agency are required" });
    }
    
    try {
      const tickets = await Ticket.find({ origin, destination, agency });
      if (tickets.length === 0) {
        return res.status(404).json({
          message: "No tickets found for the specified route and agency",
        });
      }
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });
  
  Router.post("/getYourBoughtTicket", async (req, res) => {
    const {
      userName,
      origin,
      destination,
      price,
      departureTime,
      arrivalTime,
      vehicleNumber,
      paymentStatus,
      agency,
    } = req.body;
  
    if (
      !userName ||
      !origin ||
      !destination ||
      !price ||
      !departureTime ||
      !arrivalTime ||
      !vehicleNumber ||
      !paymentStatus ||
      !agency
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    const ticketId = uuidv4();
  
    try {
     
      const schedule = await TicketScheduleModel.findOne({ carPlate: vehicleNumber });
  
      if (!schedule) {
        return res.status(404).json({ error: "No driver found for the provided vehicle number" });
      }
  
   
      const newTicket = new BoughtTicket({
        ticketId,
        userName,
        origin,
        destination,
        price,
        departureTime,
        arrivalTime,
        vehicleNumber,
        agency,
        paymentStatus,
        driverName: schedule.driverName, 
      });
  
      const qrData = {
        ticketId: newTicket.ticketId,
        userName: newTicket.userName,
        paymentStatus: newTicket.paymentStatus,
      };
  
      const qrString = JSON.stringify(qrData);
  
     
      newTicket.qrCode = await QRCode.toDataURL(qrString);
  
      
      const savedTicket = await newTicket.save();
  
      if (!savedTicket) {
        return res.status(500).json({ error: "Failed to save your bought ticket" });
      }
  
      res.status(201).json({
        newTicket,
        qrCode: newTicket.qrCode, 
      });
    } catch (err) {
      console.error("Error generating QR code or saving ticket:", err);
      res.status(500).json({ error: "Failed to generate ticket" });
    }
  });
  
  
  Router.post('/addBoughtTickets', async (req, res) => {
      try {
        const {
          ticketId,
          userName,
          origin,
          destination,
          price,
          departureTime,
          arrivalTime,
          paymentStatus,
          qrCode,
          vehicleNumber,
          driverName,
          agency
        } = req.body;
        
        
        if (!ticketId || !userName || !origin || !destination || !price || !departureTime || !arrivalTime || !driverName) {
          return res.status(400).json({ error: 'All required fields must be provided' });
        }
    
        const findTicketsExists= await Ticket.findById(ticketId);
        if(!findTicketsExists){
           return res.status(401).send(" there is similar tickets");
        }
    
    
        const newTicket = new BoughtTicket({
        ticketId,
          userName,
          origin,
          destination,
          price,
          departureTime,
          arrivalTime,
          paymentStatus: paymentStatus || 'pending', 
          qrCode,
          vehicleNumber,
          driverName,
          agency
        });
        
        
        await newTicket.save();
        
        
        res.status(201).json({ message: 'Ticket added successfully', ticket: newTicket });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    

Router.get("/getQRcode", async (req, res) => {
    try {
      const dataObject = req.body;
      
      const dataString = JSON.stringify(dataObject);
      const qrCodeUrl = await QRCode.toDataURL(dataString);
      
      res.send(`<img src="${qrCodeUrl}" alt="QR Code">`);
    } catch (err) {
      res.status(500).send("Error generating QR code");
    }
  });

  
  Router.post('/scanTicket', async (req, res) => {
    try {
      const { ticketId, userName, paymentStatus} = req.body;
  
  
      if (!ticketId || !userName || !paymentStatus) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
  
      const ticket = await BoughtTicket.findOne({ ticketId, userName });
  
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
  
  
      if (ticket.paymentStatus !== paymentStatus) {
        return res.status(400).json({ error: 'Ticket payment status does not match' });
      }
  
      
      res.status(200).json({
        message: 'Ticket is valid and paid',
     });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


    module.exports=Router;
