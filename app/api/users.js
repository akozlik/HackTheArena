"use strict";
//	Need sequelize ref and data models
var Sequelize = require('sequelize'),
	Models = require(__dirname + '/../sequelize'),
	User = Models.User;

function user_get(user, callback){

}

function user_save(userData, callback){

}

function user_delete(userId, callback){

}

var user = {
	get: user_get,
	post: user_save,
	delete: user_delete
}

module.exports = user;