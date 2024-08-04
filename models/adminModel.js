const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  adminEmail: { type: String, required: true, unique: true },
  adminPassword: { type: String, required: true },
  adminAgency: { type: String, required: true },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
