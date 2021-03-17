let fs = require("fs");
fs.writeFile("mynewfile3.txt", " This is my text. ", (err) => {
	//replaces text
	if (err) throw err;
	console.log("Replaced! ");
});
