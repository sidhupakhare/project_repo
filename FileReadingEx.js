var fs = require('fs');

fs.readFile("file4.txt", function(err, fileContents) {
	if(err) {
		console.log("Error");
	} else {
		console.log("Data " + data.toString());
	}
});

var data = fs.readFileSync("file4.txt");
console.log("Sync data is " + data.toString());
console.log("This is End");