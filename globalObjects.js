console.log(__filename); //to get file name under execution
console.log(__dirname); // to get directory name under execution

var printVal = function() {
	console.log("This line is printed from the setTimeout function");
}
//Global Functions
setTimeout(printVal, 5000);
setInterval(printVal, 2000)