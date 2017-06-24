var express = require('express');
var consign = require('consign');

module.exports = function() {
	var app = express();

	consign()
	.include('controllers')
	.into(app); //a variavel App passa a ter todo o conhecimento da pasta controllers

	return app;
}