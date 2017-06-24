module.exports = function(app) {
	app.get('/payments', function(req, res) {
		console.log('Received Test request on port 3000');
		res.send("OK.");
	});

	app.post('/payments/payment', function(req, res){
		var payment = req.body;
		console.log(payment);
		res.send("OK.")
	});
	
}
