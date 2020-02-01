// Create a sequelize for registration form

module.exports = function(sequelize, DataTypes) {
  var Model = sequelize.define("runners", {
    username : DataTypes.STRING,
    password : DataTypes.STRING,
    email : DataTypes.STRING,
    dob : DataTypes.INTEGER,
    height : DataTypes.INTEGER,
    weight : DataTypes.INTEGER,
    age : DataTypes.INTEGER
  }); 
  return Model;
};
