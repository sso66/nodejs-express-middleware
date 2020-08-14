/* express_templates.js */

var express = require('express'),
    jade = require('jade');

var app = express();
app.set('views', './views');
app.set(' view engine', 'jade');
app.engine('jade', jade, __express);
app.listen(80);
app.locals({
    uname: 'Brad',
    vehicle: 'Jeep',
    terrain: 'Mountain',
    climate: 'Desert',
    location: 'Unknown'
});
app.get('jade', function(req, res) {
    res.render(user_jade);
});
