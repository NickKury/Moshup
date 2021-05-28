'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Genres', [
        {
          name: 'Metal',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Rap',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EDM',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pop',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Rock',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Reggae',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Alternative',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pop Punk',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Genres', null, {});
  }
};
