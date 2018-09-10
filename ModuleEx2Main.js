var http = require('http'); //Core module
http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("This is my own created Server running on port 8080");
	response.end();
}).listen(8080);