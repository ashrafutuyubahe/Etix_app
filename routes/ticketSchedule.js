const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const Router = express.Router();
const TicketScheduleModel = require("../models/scheduleModel");
const Ticket = require("../models/ticketsModel");
const boughtTicketScheduleModel = require("../models/boughtTicketModel");


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
      driverCarPlate,
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
          totalSeats: 30, 
          availableSeats: 30, 
          totalCost: 0,
          drivers: new Set(), 
        };
      }
    });


    boughtTickets.forEach(ticket => {
      const route = `${ticket.origin} - ${ticket.destination}`;
      if (groupedSchedules[route]) {
        const seatsPurchased = 1; 
        groupedSchedules[route].availableSeats = Math.max(0, groupedSchedules[route].availableSeats - seatsPurchased); // Reduce available seats, ensuring it doesn't go below 0
        groupedSchedules[route].totalCost += ticket.price;

        
        groupedSchedules[route].drivers.add({
          driverName: ticket.driverName || 'Unknown',
          driverCarPlate: ticket.driverCarPlate || 'Unknown',
        });
      }
    });

    const scheduleArray = Object.keys(groupedSchedules).map(route => {
      const { totalSeats, availableSeats, totalCost, drivers } = groupedSchedules[route];
      return {
        route,
        totalSeats,
        availableSeats,
        totalCost,
        drivers: Array.from(drivers),
      };
    });

   
    return res.status(200).json(scheduleArray);
  } catch (error) {
    console.error('Error fetching schedules:', error);
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
