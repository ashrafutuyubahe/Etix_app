const mongoose = require("mongoose");

const ticketScheduleSchema = new mongoose.Schema({
  carPlate: {
    type: String,
    required: true,
    trim: true,
  },
  origin: {
    type: String,
    required: true,
    trim: true,
  },
  destination: {
    type: String,
    required: true,
    trim: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
    trim: true
  },
    agency: { type: String, required: true },
  
});

const TicketScheduleModel = mongoose.model(
  "TicketScheduleModel",
  ticketScheduleSchema
);
module.exports = TicketScheduleModel;
