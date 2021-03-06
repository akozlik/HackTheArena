//  Environment variables for local testing
if(!process.env.DATABASE_URL){
	require('dotenv').config({silent: true});
};

var postgres = require('./sequelize');
console.log('**\tSequelize initialize...');

postgres.sequelize.sync(function(err){						//	Sequelize reads data?
	if(err){												//	No database? No server.
		console.error(err);
		return process.exit(1);
	}
}).then(function(){
	console.log('**\tSequelize sync complete');

	prepopulate();

	var http = require('http');
	var expressApp = require('./express');					//	Express server

	var expressServer = http.createServer(expressApp);		//	Make http server
	expressServer.listen(process.env.PORT);					//	Tell Express to listen
	console.log('**\tExpress listening on port ' + process.env.PORT);

	setInterval(function herokukeepalive(){  				//	Ping Heroku every 10 minutes (600000ms)
		console.log('**\tKeepalive ping');
		http.get(process.env.KEEPALIVE_ENDPOINT);
	}, 600000);


});


function prepopulate(){

var uuid = require('node-uuid');
var Sequelize = require('sequelize');
var Models = require(__dirname + '/sequelize');

var Client = Models.Client;
var Event = Models.Event;
var Group = Models.Group;

var client_id = uuid.v4();
var event_id = uuid.v4();
var group_id = "hackthearena";

	Client.create({
		client_id: client_id,
		client_name: "Orlando Magic"
	});

	Event.create({
		client_id: client_id,
		event_id: event_id,
		event_name: "Orlando Magic vs Philadelphia 76ers",
		event_date: "2014-01-01",
		event_loc: "Orlando",
		event_desc: "Orlando Magic game!"
	});

	Group.create({
		event_id: event_id,
		group_id: "hackthearena",
		group_name: "Hack the Arena",
		group_sponsor: "Orlando Tech Association",
		group_img: "http://imgur.com"
	});

}