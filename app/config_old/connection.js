const Sequelize = require("sequelize");
require("dotenv").config();
const keys = require("../../keys.js");

const connection = keys.db;
const PORT = process.env.PORT || 3306;
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize("heroku_92c73c39c0ab5a9", connection.user, connection.pass, {
  host: connection.host,
  port: PORT,
  dialect: "mysql",
  pool: {
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
