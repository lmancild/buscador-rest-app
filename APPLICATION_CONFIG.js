var express = require('express');
var bodyParser = require('body-parser');
var OAuth2Server = require('oauth2-server');
var cors = require('cors')
var Request = OAuth2Server.Request;
var Response = OAuth2Server.Response;
var db = require('./DB_CONFIG');
var app = express();

// Controllers of APP
var UserController = require('./controller/UserController');
var ReservationController = require('./controller/ReservationController');
var NoticeController = require('./controller/NoticeController');
var RegisterController = require('./controller/RegisterController');

//CONFIG OAUTH PENDIENTE
//app.oauth = new OAuth2Server({
//	model: require("./model"),
//	grants: [ 'client_credentials','password','authorization_code']
//});
//
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//
//  app.all('/oauth/token', function(req,res,next){
//    var request = new Request(req);
//    var response = new Response(res);
//    app.oauth
//      .token(request,response)
//      .then(function(token) {
//        return res.json(token)
//      }).catch(function(err){
//    	console.log("ERRR " + err);
//        return res.status(500).json(err)
//      })
//  });
//
//  app.post('/authorise', function(req, res){
//    var request = new Request(req);
//    var response = new Response(res);
//    return app.oauth.authorize(request, response).then(function(success) {
//        res.json(success)
//    }).catch(function(err){
//      res.status(err.code || 500).json(err)
//    })
//  });
//
//  app.get('/authorise', function(req, res) {
//    return db.OAuthClient.findOne({
//        where: {
//          client_id: req.query.client_id,
//          redirect_uri: req.query.redirect_uri,
//        },
//        attributes: ['id', 'name'],
//      })
//      .then(function(model) {
//        if (!model) return res.status(404).json({ error: 'Invalid Client' });
//        return res.json(model);
//      }).catch(function(err){
//        return res.status(err.code || 500).json(err)
//      });
//  });
//  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", UserController);
app.use("/reservation", ReservationController);
app.use("/notice", NoticeController);
app.use("/register", RegisterController);

module.exports = app;