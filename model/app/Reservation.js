var mongoose = require('mongoose');  
var ReservationSchema = new mongoose.Schema({  
  date : Date,
  code : String,
  description: String
});

mongoose.model('RESERVATION', ReservationSchema);
module.exports = mongoose.model('RESERVATION');