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
        description: 'Dance Gavin Dance/Hollywood',
        userId: 1,
        genreId: 1,
        date: '2021-06-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'J.Cole/Pittsburgh',
        userId: 1,
        genreId: 2,
        date: '2021-08-19',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Yellow Claw/Los Angeles',
        userId: 1,
        genreId: 3,
        date: '2021-06-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Tame Impala/Austin',
        userId: 1,
        genreId: 7,
        date: '2021-09-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Bilmuri/Buffalo',
        userId: 1,
        genreId: 7,
        date: '2021-07-22',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Drake/St.Louis',
        userId: 1,
        genreId: 2,
        date: '2021-11-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Joyner Lucas/San Francisco',
        userId: 1,
        genreId: 2,
        date: '2021-09-19',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Machine Gun Kelly/Philadelphia',
        userId: 1,
        genreId: 8,
        date: '2021-10-04',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Neck Deep/Denver',
        userId: 1,
        genreId: 8,
        date: '2021-09-20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Periphery/Albany',
        userId: 1,
        genreId: 1,
        date: '2021-10-10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Rebelution/Santa Barbara',
        userId: 1,
        genreId: 6,
        date: '2021-09-03',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Veil of Maya/Cincinnati',
        userId: 1,
        genreId: 1,
        date: '2021-06-06',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'The Weeknd/Nashville',
        userId: 1,
        genreId: 4,
        date: '2021-07-14',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Porter Robinson/Las Vegas',
        userId: 1,
        genreId: 3,
        date: '2021-06-17',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Jeris Johnson/Charlotte',
        userId: 1,
        genreId: 4,
        date: '2021-07-12',
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
