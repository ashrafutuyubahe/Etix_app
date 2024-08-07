const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketId: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  price: { type: Number, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  purchaseDateTime: { type: Date, default: Date.now },
  paymentStatus: { type: String, enum: ['successful', 'pending', 'failed'], default: 'pending' },
   qrCode: { type: String},
  vehicleNumber: { type: String },
   agency: { type: String }
  
  
});

const BoughtTicket = mongoose.model('BoughtTicket', ticketSchema);

module.exports = BoughtTicket;
