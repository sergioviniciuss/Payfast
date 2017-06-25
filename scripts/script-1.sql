mysql -u root;
create database payfast;
use payfast;

CREATE TABLE `payments` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`payment_type` varchar(255) NOT NULL,
	`value` decimal(10,2) NOT NULL,
	`currency` varchar(3) NOT NULL,
	`status` varchar(255) NOT NULL,
	`date` DATE,
	`description` text,
	PRIMARY KEY (id)
);