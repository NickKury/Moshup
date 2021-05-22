'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};