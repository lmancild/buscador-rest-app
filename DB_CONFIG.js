// <----------------------------------------------------> 
// CONNECTION TO DATABASE 
// VERSION: 0.0.1

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/GOEK';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Server Connection Error:'));