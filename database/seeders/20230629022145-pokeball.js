'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pokeballs', [{
      name: 'MallaBall',
      color: 'Red',
      quantity: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'SanaBall',
      color: 'Pink',
      quantity: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'OcasoBall',
      color: 'Green',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'SuperBall',
      color: 'Blue',
      quantity: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'UltraBall',
      color: 'Black',
      quantity: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'MasterBall',
      color: 'Purple',
      quantity: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'LuxBall',
      color: 'White',
      quantity: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'VelozBall',
      color: 'Yellow',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pokeballs', null, {});
  }
};
