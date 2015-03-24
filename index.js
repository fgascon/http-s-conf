var http = require('http');
var config = require('s-conf');
var debug = require('debug')('http-s-conf');

function createServer(requestHandler){
	var server = http.createServer(requestHandler);
	
	server.listen(config.require('http_port'), config.get('http_host', '0.0.0.0'), function(){
		var address = server.address();
		debug("HTTP server listening on %s:%d", address.address, address.port);
	});
	
	return server;
};

exports = module.exports = createServer;
exports.createServer = createServer;
