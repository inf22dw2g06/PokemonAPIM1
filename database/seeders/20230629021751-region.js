'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Regions', [{
      name: 'Hoenn',
      cardinal_point: 'North',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Shinnoh',
      cardinal_point: 'West',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kanto',
      cardinal_point: 'South',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Teselia',
      cardinal_point: 'East',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Regions', null, {});
  }
};
