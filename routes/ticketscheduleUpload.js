const express = require("express");
const Router = express.Router();
const multer = require("multer");
const XLSX = require("xlsx");
const mongoose = require("mongoose");
const TicketScheduleModel = require("../models/scheduleModel");
const Ticket = require("../models/ticketsModel"); 


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/**
 * @swagger
 * /uploadTicketScheduleFile/api/upload:
 *   post:
 *     tags:
 *       - Ticket schedule upload file
 *     summary: Upload ticket schedules
 *     description: Upload an Excel file containing ticket schedules. The file should include car plate, origin, destination, departure time, arrival time, cost, driver name, and agency.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Schedules have been processed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 redundantSchedules:
 *                   type: array
 *                   items:
 *                     type: object
 *       400:
 *         description: No file uploaded
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Error processing file
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */


Router.post("/api/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

   
    const savePromises = [];
    const redundantSchedules = [];

    for (const schedule of jsonData) {
      const {
        carPlate,
        origin,
        destination,
        departureTime,
        arrivalTime,
        cost,
        driverName,
        agency,
      } = schedule;

     
      if (
        !carPlate ||
        !origin ||
        !destination ||
        !departureTime ||
        !arrivalTime ||
        !cost ||
        !driverName ||
        !agency
      ) {
        continue; 
      }

      
      const existingSchedule = await TicketScheduleModel.findOne({
        carPlate,
        origin,
        destination,
        departureTime,
        arrivalTime,
        cost,
        driverName,
      });

      if (existingSchedule) {
        redundantSchedules.push(schedule);
      } else {
      
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

        const newTicket = new Ticket({
          origin,
          destination,
          departureTime,
          arrivalTime,
          agency,
          driverName,
          price: cost,
          driverCarPlate: carPlate,
        });

        
        savePromises.push(newSchedule.save(), newTicket.save());
      }
    }

  
    await Promise.all(savePromises);

    
    let responseMessage = "Schedules have been processed successfully.";
    if (redundantSchedules.length > 0) {
      responseMessage += " Some schedules were skipped as they already exist. Please review the file.";
    }

    return res.status(200).json({
      message: responseMessage,
      redundantSchedules
    });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ message: "Error processing file" });
  }
});

module.exports = Router;
