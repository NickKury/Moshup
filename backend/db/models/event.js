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
    Event.belongsTo(models.User,
      {foreignKey:'userId'})

    Event.belongsTo(models.Genre,
      {foreignKey:'genreId'})

    Event.hasMany(models.Attending,
      {foreignKey:'eventId'})
  };
  return Event;
};