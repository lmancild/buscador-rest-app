var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Reservation = require('../model/app/Reservation');

router.post('/', function (req, res) {
    Reservation.create({
            date : req.body.date,
            code : req.body.code,
            description: req.body.description
        }, 
        function (err, reservation) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(reservation);
        });
});

router.get('/', function (req, res) {
    Reservation.find({}, function (err, reservations) {
        if (err) return res.status(500).send("There was a problem finding the reservations.");
        res.status(200).send(reservations);
    });
});

router.get('/:id', function (req, res) {
    Reservation.findById(req.params.id, function (err, reservation) {
        if (err) return res.status(500).send("There was a problem finding the reservation.");
        if (!reservation) return res.status(404).send("No reservation found.");
        res.status(200).send(reservation);
    });
});


router.delete('/:id', function (req, res) {
    Reservation.findByIdAndRemove(req.params.id, function (err, reservation) {
        if (err) return res.status(500).send("There was a problem deleting the reservation.");
        res.status(200).send("Reservation: "+ reservation.name +" was deleted.");
    });
});

router.put('/:id', function (req, res) {
    Reservation.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, reservation) {
        if (err) return res.status(500).send("There was a problem updating the reservation.");
        res.status(200).send(reservation);
    });
});


module.exports = router;