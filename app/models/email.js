var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates a "email" model that matches up with DB
var Email = sequelize.define("email_account", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email_address: Sequelize.STRING,
  verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  opt_out: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  
  // createdAt: {
  //   type: Sequelize.DATE(3),
  //   defaultValue: sequelize.NOW
  // },
  // updatedAt: {
  //   type: Sequelize.DATE(3),
  //   defaultValue: sequelize.NOW
  // }
});

// Syncs with DB
Email.sync().then(function() {
  console.log("Database is synchronized.")
});

// Makes the Book Model available for other files (will also create a table)
module.exports = Email;