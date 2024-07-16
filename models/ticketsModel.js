const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  departureTime: {
    type: Date,
    required: true
  },
  agency: {
    type: String,
    required: true
  }
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
