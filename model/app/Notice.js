var mongoose = require('mongoose');  
var NoticeSchema = new mongoose.Schema({  
  name : String,
  code : String,
  description: String
});

mongoose.model('NOTICE', NoticeSchema);
module.exports = mongoose.model('NOTICE');