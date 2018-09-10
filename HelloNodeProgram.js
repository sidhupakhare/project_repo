var http = require('http'); //import module http

http.createServer(function(request, response){
	response.writeHead(200);//status code in header
	response.write("Hello Nodejs");
	response.end();
}).listen(8080);
console.log("Listening. . .");