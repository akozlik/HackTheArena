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