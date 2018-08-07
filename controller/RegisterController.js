var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Register = require('../model/app/Register');

router.post('/create', function (req, res) {
    Register.create({
            email : req.body.email,
            password : req.body.password,
            typeUser : req.body.typeUser,
            create_date : req.body.create_date,
            active : false
        }, 
        function (err, register) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(register);
        });
});


module.exports = router;