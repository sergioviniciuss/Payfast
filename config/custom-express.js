var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
	var app = express();

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use(expressValidator());

	consign()
		.include('controllers')
		.then('db')
		.into(app); //a variavel App passa a ter todo o conhecimento da pasta controllers e depois persistence

	return app;
}