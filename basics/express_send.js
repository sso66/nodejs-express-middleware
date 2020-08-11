/* express_send.js */
var express = require('express');
var app = express();
app.listen(80);
app.get('/', function(req, res) {
	var response = '<html><head><title>Simple Send</title></head>' +
					'<body><Hello from Express</h1></body></html>';
	res.status(200);
	res.set({
		'Content-Type': 'text/html',
		'Content-Length': response.length
	});
	res.send(response);
	console.log(response);
	console.log('Response Finished? ' + res.finished);
	console.log('\nHeaders Sent: ' + res.headersSent);
	console.log('\nContent-Type: ' + res.get('Content-Type'));
	console.log('\nContent-Length: ' + res.get('Content-Length'));
});
app.get('/error', function(req, req) {
	res.status(400);
	res.send("This is a bad request.");
});

console.log('Express webserver listening at port: 80\n');
/* eof */
