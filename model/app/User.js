var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  lastname: String,
  email: String,
  password: String
  
});

mongoose.model('USER', UserSchema);
module.exports = mongoose.model('USER');