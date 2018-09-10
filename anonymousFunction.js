var printVal = function(inputValue) {
	console.log(inputValue);
}

function mainFunction(anotherFunction, value) {
	anotherFunction(value);
}
mainFunction(printVal, "Hello Anonymous Function");
mainFunction(function(inputValue){console.log(inputValue)}, "Hello Anonymous Function");