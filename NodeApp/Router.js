function route(handle, pathname, response, reviewData) {
	console.log("Routing a request for " + pathname);

	if(typeof handle[pathname] === 'function') {
		handle[pathname](response, reviewData);
	} else {
		console.log('No handler found');
		response.writeHead(404, {'Content-Type':"text/plain"});
		response.write("Error 404 Page Not Found");
		response.end();
	}
}

exports.route = route;