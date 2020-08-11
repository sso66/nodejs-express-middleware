// express_http_https.js

var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var app = express();

var options = {
	host: '127.0.0.1',
	key: fs.readFileSync('ssl/server.key'),
	cert: fs.readFileSync('ssl/server.crt')
};

http.createServer(app).listen(80);
console.log('Server running at http://127.0.0.1:80');

//https.createServer(options, app).listen(443);
//console.log('Server running at http://127.0.0.1:433');

app.get('/', function(req, res) {
	res.send('<h1>Hello from Express. This is really cool!</h1>');
});
