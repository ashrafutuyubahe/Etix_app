const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const Router = express.Router();
const TicketScheduleModel = require("../models/scheduleModel");
const Ticket = require("../models/ticketsModel");
const boughtTicketScheduleModel = require("../models/boughtTicketModel");


/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Ticket management
 */

/**
 * @swagger
 * /addTickets:
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
 * /findTickets:
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
 * /getYourBoughtTicket:
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




const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const totalSeats = 30;

wss.on("connection", (ws) => {
  console.log("New WebSocket client connected");

  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
  });

  ws.send(
    JSON.stringify({ type: "initial", totalSeats, availableSeats: totalSeats })
  );
});

const updateSeatAvailability = async (carPlate) => {
  try {
    const ticketCount = await boughtTicketScheduleModel.countDocuments({
      vehicleNumber: carPlate,
    });
    const availableSeats = totalSeats - ticketCount;

    const message = JSON.stringify({
      type: "update",
      carPlate,
      availableSeats,
      isSoldOut: ticketCount >= totalSeats,
    });

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  } catch (error) {
    console.error("Error updating seat availability:", error);
  }
};



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
      return res.status(400).json({ error: "All fields are required" });
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
      return res
        .status(400)
        .json({ error: "A similar schedule already exists" });
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
 
    const newTicket = new Ticket({
      origin,
      destination,
      departureTime,
      arrivalTime,
      agency,
      driverName,
      price: cost,
      driverCarPlate:carPlate
    });

    await Promise.all([newSchedule.save(), newTicket.save()]);

    return res
      .status(201)
      .json({
        message: "Schedule added successfully and tickets have been created",
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});




Router.get("/findschedule", async (req, res) => {
  try {
    const { origin, destination, agency } = req.query;

    if (!origin || !destination || !agency) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const schedules = await TicketScheduleModel.find({
      origin,
      destination,
      agency,
    });

    if (schedules.length === 0) {
      return res
        .status(404)
        .json({
          message:
            "No ticket schedules found for the specified route and agency",
        });
    }

    return res.status(200).json(schedules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});



Router.get('/getSchedules', async (req, res) => {
  try {
   
    const schedules = await TicketScheduleModel.find({});
    if (schedules.length === 0) {
      return res.status(404).json({ message: 'No ticket schedules found' });
    }

 
    const boughtTickets = await boughtTicketScheduleModel.find({});

    
    const groupedSchedules = {};

    schedules.forEach(schedule => {
      const route = `${schedule.origin} - ${schedule.destination}`;
      if (!groupedSchedules[route]) {
        groupedSchedules[route] = {
          id: schedule._id,
          route,
          totalSeats: 30,
          availableSeats: 30,
          totalCost: 0,
          drivers: new Set(),
          scheduleDetails: schedule
        };
      }
    });

    boughtTickets.forEach(ticket => {
      const route = `${ticket.origin} - ${ticket.destination}`;
      if (groupedSchedules[route]) {
        const seatsPurchased = 1; 
        groupedSchedules[route].availableSeats = Math.max(0, groupedSchedules[route].availableSeats - seatsPurchased);
        groupedSchedules[route].totalCost += ticket.price;

        groupedSchedules[route].drivers.add({
          driverName: ticket.driverName,
          driverCarPlate: ticket.driverCarPlate,
        });
      }
    });

    
    const scheduleArray = Object.keys(groupedSchedules).map(route => {
      const { id, totalSeats, availableSeats, totalCost, drivers, scheduleDetails } = groupedSchedules[route];
      return {
        id,
        route,
        totalSeats,
        availableSeats,
        totalCost,
        drivers: Array.from(drivers),
        scheduleDetails 
      };
    });

    return res.status(200).json(scheduleArray);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



Router.delete('/deleteSchedule/:id', async (req, res) => {
  try {
    const scheduleId = req.params.id;

    
    const result = await TicketScheduleModel.findByIdAndDelete(scheduleId);

    if (!result) {
      return res.status(404).json({ message: 'Schedule not found' });
    }


    return res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




Router.put("/updateSchedule/:id", async (req, res) => {
  try {
    const { id } = req.params;
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
      !newCarPlate ||
      !newOrigin ||
      !newDestination ||
      !newDepartureTime ||
      !newArrivalTime ||
      !newCost ||
      !newDriverName ||
      !newAgency
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const schedule = await TicketScheduleModel.findById(id);
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }

    const updatedSchedule = {
      carPlate: newCarPlate,
      origin: newOrigin,
      destination: newDestination,
      departureTime: newDepartureTime,
      arrivalTime: newArrivalTime,
      cost: newCost,
      driverName: newDriverName,
      agency: newAgency,
    };  
    const result = await TicketScheduleModel.findByIdAndUpdate(
      id,
      updatedSchedule,
      { new: true }
    );
    if (!result) {
      return res.status(400).json({ error: "Failed to update the schedule" });
    }

    const updateTicketExists = await Ticket.findOne({
      newCarPlate,
      newOrigin,
      newDestination,
      newDepartureTime,
      newArrivalTime,
      newCost,
      newDriverName,
      newAgency,
    });

    if (!updateTicketExists) {
      res.status(401).send("failed to update the tickets");
    }
    const updatedTicket = {
      carPlate: newCarPlate,
      origin: newOrigin,
      destination: newDestination,
      departureTime: newDepartureTime,
      arrivalTime: newArrivalTime,
      cost: newCost,
      driverName: newDriverName,
    };
    const updateTicket = await Ticket.findByIdAndUpdate(updateTicketExists._id,updatedTicket, { new: true });

    return res.status(200).json({ message: "Schedule updated successfully" });
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: "Internal server error" });
  }
});



Router.get("/getSeat", async (req, res) => {
  try {
    const { carPlate } = req.query;

    if (!carPlate) {
      return res.status(400).json({ error: "Car plate is required" });
    }

    const ticketCount = await boughtTicketScheduleModel.countDocuments({
      vehicleNumber: carPlate,
    });
    const availableSeats = totalSeats - ticketCount;

    if (ticketCount >= totalSeats) {
      return res.status(200).json({ message: "The tickets are sold out" });
    }

    updateSeatAvailability(carPlate);
    console.log(availableSeats);
    console.log(ticketCount);
    return res.status(200).json({ availableSeats });
  } catch (error) {
    console.error("Error fetching available seats:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

module.exports = Router;
