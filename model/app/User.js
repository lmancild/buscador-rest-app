var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  email: String,
  password: String,
  type : String
  
});

mongoose.model('USER', UserSchema);
module.exports = mongoose.model('USER');