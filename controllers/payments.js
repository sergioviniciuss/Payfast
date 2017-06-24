module.exports = function(app) {
	app.get('/payments', function(req, res) {
		console.log('Received Test request on port 3000');
		res.send("ok");
	});
	
}
