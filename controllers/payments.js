module.exports = function(app) {
	app.get('/payments', function(req, res) {
		console.log('Received Test request on port 3000');
		res.send("OK.");
	});

	app.post('/payments/payment', function(req, res){

		req.assert("payment_type", 
			"Payment type is mandatory").notEmpty();
		req.assert("value", 
			"Value is mandatory and must be a decimal").notEmpty().isFloat();

		var errors = req.validationErrors();

		if (errors) {
			console.log("Validation errors found");
			res.status(400).send(errors);
			return;
		}

		var payment = req.body;
		console.log('processing a new payment request...');
		var connection = app.db.connectionFactory();
		var paymentDAO = new app.db.PaymentDAO(connection);

		payment.status = "CREATED";
		payment.date = new Date;


		paymentDAO.save(payment, function(error, result){
			if (error) {
				console.log("error while trying to persist on DB..." + error)
				res.status(400).send(error);
			} else {
				console.log('payment created: ' + result);
				res.json(payment);
			}
		});

	});
	
}
