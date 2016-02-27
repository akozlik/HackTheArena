"use strict";
//	Need sequelize ref and data models
var Sequelize = require('sequelize'),
	Models = require(__dirname + '/../sequelize'),
	Group = Models.Group;

function group_get(group, callback){

}

function group_save(groupData, callback){

}

function group_delete(groupId, callback){
	
}

var group = {
	get: group_get,
	post: group_save,
	delete: group_delete
}

module.exports = group;