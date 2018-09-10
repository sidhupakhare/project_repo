var http = require('http');
var url = require('url');

function startServer(route, handle) {
	function onRequest(request, response){
		var reviewData = "";
		var pathName = url.parse(request.url).pathname;
		console.log("Request Received for " + pathName);
		request.setEncoding("utf8");
		request.addListener("data", function(chunk) {
			reviewData += chunk;
		});

		request.addListener("end", function() {
			route(handle, pathName, response, reviewData);
		});
		
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server started at port 8888");
}

exports.startServer = startServer;