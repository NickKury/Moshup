'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    Genre.hasMany(models.Event,
      {foreignKey: 'genreId'})
  };
  return Genre;
};