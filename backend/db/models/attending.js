'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attending = sequelize.define('Attending', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  Attending.associate = function(models) {
    // associations can be defined here
    Attending.belongsTo(models.User,{foreignKey:'userId'});
    Attending.belongsTo(models.Event,{foreignKey:'eventId'});
  };
  return Attending;
};