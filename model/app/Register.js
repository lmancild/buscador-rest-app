var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  email: String,
  password: String,
  typeUser : String,
  create_date : Date,
  active : Boolean
});

mongoose.model('users_credentials', UserSchema);
module.exports = mongoose.model('users_credentials');