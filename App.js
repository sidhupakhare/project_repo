function printVal(inputValue) {
	console.log(inputValue);
}

function mainFunction(anotherFunction, value){
	anotherFunction(value);
}
mainFunction(printVal, "Hello Functions");