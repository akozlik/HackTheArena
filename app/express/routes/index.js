var express = require('express');
var router = express.Router();
var request = require('request');
var api = require('../../api');

router.get('/', function(req, res) {
	res.render('pages/index', {
		title: "Log In To Win"
	});
});

router.get('/seats', function(req, res) {
	console.log("Seats");
	res.render('pages/seats', {
		title: "Where are you sitting?"
	});
});

router.get('/engagement', function(req, res) {
	console.log("Engagement");
	res.render('pages/engagement', {
		title: "Play to Win!"
	});
});

router.get('/register', function(req, res) {
	console.log("Registration");
	res.render('pages/register', {
		title: "Register"
	});
});

var clientsController = require('../../api/clients');
var eventsController = require('../../api/events');
var groupsController = require('../../api/groups');
var usersController = require('../../api/users');

// router.get('/:client', clientsController.index(req, res));

router.get('/:client/:event', function(req, res) {
	console.log(req, res);
});

router.get('/:client/:event/:group', function(req, res) {
	console.log(req, res);
});


module.exports = router;
