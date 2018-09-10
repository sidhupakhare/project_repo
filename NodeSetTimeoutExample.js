var http = require('http'); //import module http
http.createServer(function(request, response){
	response.writeHead(200);
	response.write('Server Running');
	setTimeout(function(){
		response.write("Server done with running.");
		response.end();
	}, 5000);
}).listen(8080);
console.log("Listening. . .");