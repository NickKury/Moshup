'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attending = sequelize.define('Attending', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  Attending.associate = function(models) {
    // associations can be defined here
  };
  return Attending;
};