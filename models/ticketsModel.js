const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  agency: {
    type: String,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: { type: Date, required: true },
  driverName: { type: String, required: true },
  driverCarPlate: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
