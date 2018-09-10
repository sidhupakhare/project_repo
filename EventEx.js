var events = require('events');

var eventEmitter = new events.EventEmitter();
var ringbell = function () {
	console.log("Ring ring ring");
	eventEmitter.emit("bellRings", "welcome");
}

eventEmitter.on("doorOpen", ringbell);
eventEmitter.on("bellRings", function(msg) {
	console.log(msg);
});
eventEmitter.emit("doorOpen");
