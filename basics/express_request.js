/* express_request.js */

var express = require('express');
var app = express();
app.listen(80);
app.get('/user/:userid', function(req, res) {
	console.log("URL: "			+ req.originalUrl);
	console.log("Protocol:"		+ req.protocol);
	console.log("IP: " 			+ req.ip);
	console.log("Path: " 		+ req.path);
	console.log("Host: " 		+ req.host);
	console.log("Method: "		+ req.method);
	console.log("Query: " 		+ req.query);
	console.log("Fresh: " 		+ req.fresh);
	console.log("Stale: " 		+ req.stale);
	console.log("Secure: "		+ req.secure);
	console.log("UTF8: " 		+ req.acceptsCharset('utf8'));
	console.log("Connection: "	+ req.get('connection'));
	console.log("Headers: " 	+ JSON.stringify(req.headers.null, 2));
	res.send("User Express"); 
});
console.log('Express webserver listening at port: 80\n');
/* eof */