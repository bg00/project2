module.exports = function(sequelize, DataTypes) {
    var Model = sequelize.define("progress", {
        caloriesBurnt: DataTypes.INTEGER,
        milesRun: DataTypes.INTEGER,
    });
    return Model;
};