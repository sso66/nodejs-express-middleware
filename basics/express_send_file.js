/* express_send_file.js */
var express = require('express');
var app = express();
app.listen(80);
app.get('/image', function(req, res) {
	res.sendfile('/basics/arch.jpg',
				 { maxAge: 1, //24*60*60*1000,
	 			   root: './'},
	  			 function(err) {
	  	if (err) {
	  		console.log("Error");
	  	} else {
	  		console.log("Success");
	  	}
	  });
});
console.log('Express webserver listening at port: 80\n');
/* eof */

