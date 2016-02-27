"use strict";
//	Need sequelize ref and data models
var Sequelize = require('sequelize'),
	Models = require(__dirname + '/../sequelize'),
	Activity = Models.Activity;

function activity_get(activity, callback){

}

function activity_save(activityData, callback){

}

function activity_delete(activityId, callback){

}

var activity = {
	get: activity_get,
	post: activity_save,
	delete: activity_delete
}

module.exports = activity;