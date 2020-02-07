module.exports = function(sequelize, DataTypes) {
    var Model = sequelize.define("user", {
      username : {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password : {
        type: DataTypes.STRING,
        allowNull: false 
      },
      email : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique : {
          args: true,
          msg: 'Email address already in use!'
        }
      },
      dob : DataTypes.INTEGER,
      height : DataTypes.INTEGER,
      weight : DataTypes.INTEGER
    }); 

    Model.associate = function(models){
      models.user.hasMany(models.progress);
      models.progress.belongsTo(models.user);
    }

    return Model;
  };
  