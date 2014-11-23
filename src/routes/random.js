function init(app) {
	app.get('/random', index);
}

function index(req, res, next) {
	var skip = req.query.skip || 0;
	var take = req.query.take || 100;

	var collection = [];
	for (var i = 0; i < take; i++) {
		collection.push({
			name: Math.floor((Math.random() * 100000) + 1),
			value: Math.floor((Math.random() * 100000) + 1)
		});
	}

	res.send({
		name: 'Random Numbers',
		collection: collection
	});
}

exports.init = init;