module.exports = function(sequelize, DataTypes) {
    var Model = sequelize.define("registers", {
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
  