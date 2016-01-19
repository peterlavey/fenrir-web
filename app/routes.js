module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html'); 
	});

	app.get('/dashboard', function(req, res) {
		res.sendfile('./public/views/dashboard.html'); 
	});
};