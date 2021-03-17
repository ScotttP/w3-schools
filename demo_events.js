let fs = require("fs");
let events = require("events");
let eventEmitter = new events.EventEmitter();

//create event handler
let myEventHandler = () => {
	console.log(" I hear scream");
};

//assign and event handler to event

eventEmitter.on("scream", myEventHandler);

eventEmitter.emit("scream");
