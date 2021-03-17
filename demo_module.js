let http = require("http");
let dt = require("./myfirstmodule");

http
	.createServer((req, res) => {
		res.writeHead(200, { "Content-Type": "Text/HTML" });
		res.write(`The date and time are currently ${dt.myDateTime()}`);
		res.end();
	})
	.listen(8080);
