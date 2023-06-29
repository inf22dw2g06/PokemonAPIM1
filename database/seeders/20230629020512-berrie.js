'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Berries', [{
      name: 'Aranja',
      ability: 'Heal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Caquic',
      ability: 'Poison',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Zydra',
      ability: 'Paralisis',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Safre',
      ability: 'Burn',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Berries', null, {});
  }
};
