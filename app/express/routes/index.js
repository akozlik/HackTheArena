var express = require('express');
var router = express.Router();
var request = require('request');
var api = require('../../api');

router.get('/', function(req, res) {
	console.log(req, res);
	console.log("Hullo werld");
	res.render('index', {

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
