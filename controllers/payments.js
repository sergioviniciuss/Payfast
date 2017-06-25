module.exports = function(app) {
	app.get('/payments', function(req, res) {
		console.log('Received Test request on port 3000');
		res.send("OK.");
	});

	app.post('/payments/payment', function(req, res){
		var payment = req.body;
		console.log('processing a new payment request...');

		payment.status = "CREATED";
		payment.date = new Date;

		var connection = app.db.connectionFactory();
		var paymentDAO = new app.db.PaymentDAO(connection);

		paymentDAO.save(payment, function(error, result){
			console.log('payment created');
			res.json(payment)
		});

	});
	
}
