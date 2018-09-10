var fs = require('fs');
var readableStream = fs.createReadStream("file4.txt");
var writeableStream = fs.createWriteStream("file1.txt");
readableStream.pipe(writeableStream);