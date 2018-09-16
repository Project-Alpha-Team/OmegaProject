// const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize)
var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const email = sequelize.define('Email', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email_address: DataTypes.STRING,
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  opt_out: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  
  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updatedAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
});

// Syncs with DB
email.sync().then(function() {
  console.log("Database is synchronized.")
});

// Makes the Book Model available for other files (will also create a table)
return email;
}