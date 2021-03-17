let http = require("http");
let url = require("url");
let fs = require("fs");

http
	.createServer((req, res) => {
		let q = url.parse(req.url, true);
		let filename = "." + q.pathname;
		fs.readFile(filename, (err, data) => {
			if (err) {
				// if error return 404
				res.writeHead(400, { "Content-Type": "text/html" });
				return res.end("404 Not Found");
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080);
