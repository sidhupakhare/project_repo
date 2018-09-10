console.log("User 1 has made a request");
setTimeout(callback, 5000);

console.log("User 2 has made a request");
setTimeout(callback, 5000);

console.log("User 3 has made a request");
setTimeout(callback, 5000);

function callback(){
	console.log("Data Queried and returned result in 5 Seconds");
}

