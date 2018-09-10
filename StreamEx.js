var fs = require('fs');

var readableStream = fs.createReadStream("file4.txt");
var data = "";
readableStream.setEncoding("utf8");
readableStream.on('data', function(chunk) {
	data += chunk;
});

readableStream.on("end", function() {
	console.log(data);
});

var writeData = "Hello World";
var writeableStream = fs.createWriteStream("file4.txt");
writeableStream.write(writeData, "utf8");
writeableStream.end();
writeableStream.on("finish", function() {
	console.log("Write Completed");
})