module.exports = function(sequelize, DataTypes) {
    var Model = sequelize.define("progress", {
       // date: DataTypes.date,
        caloriesBurnt: DataTypes.INTEGER,
        milesRun: DataTypes.INTEGER,
      //  motivationMessage: DataTypes.STRING
    });

    Model.associate = function(models){
      models.user.hasMany(models.progress)
      models.progress.belongsTo(models.user)
    }
    
    return Model;
};