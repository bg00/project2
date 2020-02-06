module.exports = function(sequelize, DataTypes) {
    var Model = sequelize.define("progress", {
       // date: DataTypes.date,
        caloriesBurnt: DataTypes.INTEGER,
        milesRun: DataTypes.INTEGER,
      //  motivationMessage: DataTypes.STRING
    });
    return Model;
};