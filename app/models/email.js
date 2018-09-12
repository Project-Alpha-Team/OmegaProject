var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates a "email" model that matches up with DB
var Email = sequelize.define("email_account", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email_address: Sequelize.STRING,
  verified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  opt_out: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  createdAt: {
    type: Sequelize.DATE(3),
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
  },
  updatedAt: {
    type: Sequelize.DATE(3),
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
  }
});

// Syncs with DB
Email.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Email;