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
// Email.sync().then(function() {
//   console.log("Database is synchronized.")
// });

// Makes the Book Model available for other files (will also create a table)
return email;
}