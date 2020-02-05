module.exports = function(sequelize, DataTypes) {
    var Model = sequelize.define("user", {
      username : DataTypes.STRING,
      password : DataTypes.STRING,
      email : DataTypes.STRING,
      dob : DataTypes.INTEGER,
      height : DataTypes.INTEGER,
      weight : DataTypes.INTEGER
    }); 

    /*
    Model.associate = function(models){
      models.user.hasMany(models.progress)
      models.progress.belongsTo(models.user)
    }
    */
    return Model;
  };
  