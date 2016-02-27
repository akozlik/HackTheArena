"use strict";
//	Need sequelize ref and data models
var Sequelize = require('sequelize'),
	Models = require(__dirname + '/../sequelize'),
	Client = Models.Client;

function client_get(client, callback){

}

function client_save(clientData, callback){

}

function client_delete(clientId, callback){
	
}

var client = {
	get: client_get,
	post: client_save,
	delete: client_delete
}

module.exports = client;