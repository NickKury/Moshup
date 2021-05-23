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
      return queryInterface.bulkInsert('Events', [
        {
        description: 'Dance Gavin Dance',
        userId: 1,
        genreId: 1,
        date: '2021-06-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'J.Cole',
        userId: 1,
        genreId: 2,
        date: '2021-08-19',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Yellow Claw',
        userId: 1,
        genreId: 3,
        date: '2021-06-12',
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
      return queryInterface.bulkDelete('Events', null, {});
  }
};
