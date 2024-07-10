
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
   adminName: { type: String, required: true, unique: true },
  adminPassword: { type: String, required: true },
  adminEmail: { type: String, required: true }
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
