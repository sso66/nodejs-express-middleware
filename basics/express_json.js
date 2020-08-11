/* express_json.js */
var express = require('express');
var url = require('url');
var app = express();
app.listen(80);
app.get('/json', function(req, res) {
	app.set('json spaces', 4);
	res.json({name:"Smithsonia", built:'1846', items:'137M',
			centers:['art', 'astrophysics', 'natural history',
			'planetary', 'biology', 'space', 'zoo']});
});
app.get('/error', function(req, req) {
	res.json(500, {status:false, message:"Internal Server Error"});
});
app.get('/jsonp', function(req, res) {
	app.set('jsonp callback name', 'cb');
	res.jsonp({name:"Smithsonia", built:'1846', items:'137M',
			centers:['art', 'astrophysics', 'natural history',
			'planetary', 'biology', 'space', 'zoo']});
});
console.log('Express webserver listening at port: 80\n');
/* eof */
