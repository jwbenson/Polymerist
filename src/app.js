var express = require('express');
var hbs = require('express-hbs');

var app = express();

var routes = require('./routes');
var env = process.env;

app.engine('hbs', hbs.express3({
	extname:'hbs',
	defaultLayout:  __dirname + '/views/layout.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use('/bower_components',  express.static(__dirname + '/../bower_components'));
app.use('/polymer',  express.static(__dirname + '/polymer'));

routes.init(app);

var applicationPort = env.HTTP_PORT || 3000;
app.listen(applicationPort, function (err){
	if (err) {
		return console.log(err);
	}
	console.log('listening on port ' + applicationPort);
});