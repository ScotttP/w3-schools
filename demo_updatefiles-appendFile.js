let fs = require("fs");
fs.appendFile("mynewfile1.txt", " This is my text. ", (err) => {
	//adds text
	if (err) throw err;
	console.log("updated ");
});
