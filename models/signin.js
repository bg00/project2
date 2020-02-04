// Create a sequelize for signin form

module.exports = function(sequelize, DataTypes) {
  var Model = sequelize.define("loginDB", {
    username : DataTypes.STRING,
    password : DataTypes.STRING,
  }); 
  return Model;
};
