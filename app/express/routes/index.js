var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
	console.log(req, res);
	console.log("Hullo werld");
	res.render('index', {

	});
});

router.get('/:client', function(req, res) {
	console.log(req, res);

});

router.get('/:client/:event', function(req, res) {
	console.log(req, res);
});

router.get('/:client/:event/:group', function(req, res) {
	console.log(req, res);
});


module.exports = router;
