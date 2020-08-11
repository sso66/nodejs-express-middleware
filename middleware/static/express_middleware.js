/* express_middleware.js */
/* Implementing custom middleware to remove the query string from the Request object */
var express = require('express');
var app = express();
function queryRemover(req, res, next){
	console.log("\Before URL: ");
	console.log(req.url);
	req.url = req.url.split('?')[0];
	console.log("\nAfter URL: ");
	console.log(req.url);
	next();
};
app.use(queryRemover);
app.get('/no/query', function(req, res) {
	res.send('test');
});
app.listen(80);
/* eof */