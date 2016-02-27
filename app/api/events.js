"use strict";
//	Need sequelize ref and data models
var Sequelize = require('sequelize'),
	Models = require(__dirname + '/../sequelize'),
	Event = Models.Event;

function event_get(event, callback){

}

function event_save(eventData, callback){

}

function event_delete(eventId, callback){
	
}

var event = {
	get: event_get,
	post: event_save,
	delete: event_delete
}

module.exports = event;