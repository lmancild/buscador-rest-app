var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Notice = require('../model/app/Notice');


router.post('/', function (req, res) {
    Notice.create({
            name : req.body.date,
            code : req.body.code,
            description: req.body.description
        }, 
        function (err, notice) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(notice);
        });
});

router.get('/findALl', function (req, res) {
    Notice.find({}, function (err, notices) {
        if (err) return res.status(500).send("There was a problem finding the reservations.");
        res.status(200).send(notices);
    });
});



module.exports = router;