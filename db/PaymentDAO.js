function PaymentDAO(connection) {
	this._connection = connection;
}

PaymentDAO.prototype.save = function(payment, callback) {
	this._connection.query("INSERT INTO payments SET?", payment, callback);
};

PaymentDAO.prototype.list = function(callback) {
	this._connection.query("SELECT * FROM payments", callback);
};

PaymentDAO.prototype.searchForId = function(id, callback) {
	this._connection.query("SELECT * FROM payments WHERE id = ?", [id], callback);
};

module.exports = function(){
    return PaymentDAO;
};