"use strict";
//	Need sequelize ref and data models
var Sequelize = require('sequelize'),
	Models = require(__dirname + '/../sequelize'),
	Response = Models.Response;

function response_get(response, callback){

}

function response_save(responseData, callback){

}

function response_delete(responseId, callback){

}

var response = {
	get: response_get,
	post: response_save,
	delete: response_delete
}

module.exports = response;