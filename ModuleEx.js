function relay() {
	console.log("This is from different module");
}

function longJump() {
	console.log("This is longJump Function from different module");
}

//module.exports.relay = relay;
//mdoule.exports.longJump = longJump;

module.exports = {
	relay: function() {
		console.log("This is a relay function");
	},
	longJump: function() {
			console.log("This is a longJump function");
	}

}