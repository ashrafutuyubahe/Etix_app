
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
   driverName: { type: String, required: true, unique: true },
  driverPassword: { type: String, required: true },
  driverCar: { type: String, required: true },
  driverAgency:{type:String,required:true},
 
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
