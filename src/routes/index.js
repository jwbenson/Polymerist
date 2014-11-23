
var fs = require('fs');

function init(app) {
	app.get('/', index);

	var routeFiles = fs.readdirSync(__dirname);

	routeFiles.forEach(function (filename) {
		if (filename.substr(-3) == '.js' && filename != 'index.js') {
			var route = require('./' + filename);
			if (route.init) { route.init(app); }
		}
	});
}

function index(req, res, next) {
	var context = {
		title: 'Polymer test project'
	};
	res.render('index', context);
}

exports.init = init;