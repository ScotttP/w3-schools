let fs = require("fs");
fs.writeFile("mynewfile3.txt", "Hello Content", (err) => {
	if (err) throw err;
	console.log("saved ");
});
