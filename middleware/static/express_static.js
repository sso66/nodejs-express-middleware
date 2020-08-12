/* express_static.js */
console.log("Mounting express_static.js");

var express = require('express');
var app = express();

/* Max-Age isn't itself an HTTP header. It tags along with a header 
 * called Cache-Control. If a server wanted to tell the client to cache 
 * something for one day (86,400 seconds), it'd send a header like this:
 * Cache-Control: public, max-age=86400
 */
app.use('/', express.static('./static', { maxAge: 60*60*1000 }));
app.use('/images', express.static('../images'));
app.listen(80); 

// eof
