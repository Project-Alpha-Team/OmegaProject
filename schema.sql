CREATE DATABASE `bandwagon`;
CREATE TABLE `email_accounts` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `opt_out` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) 

INSERT INTO Emails (firstName, lastName, email_address, verified, opt_out, createdAt, updatedAt) 
VALUES ("Takahiro", "Kawaguchi", "bandwagon.ucbx@gmail.com", true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Emails (firstName, lastName, email_address, verified, opt_out, createdAt, updatedAt) 
VALUES ("Jeff", "Eggink", "jpeggink@gmail.com", true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

