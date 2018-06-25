var app = require('./APPLICATION_CONFIG');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});