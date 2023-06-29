'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pokemons', [{
      name: 'Bulbasaur',
      state: 'Crazy',
      RegionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ivisaur',
      state: 'Sad',
      RegionId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Venusaur',
      state: 'Poisoned',
      RegionId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Charmander',
      state: 'Happy',
      RegionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Charmeleon',
      state: 'Sleepy',
      RegionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Charizard',
      state: 'Angry',
      RegionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Squirtle',
      state: 'Quiet',
      RegionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Wartotle',
      state: 'Resting',
      RegionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Blastoise',
      state: 'Wet',
      RegionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Caterpie',
      state: 'Lazy',
      RegionId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Metapod',
      state: 'Strong',
      RegionId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Buterfree',
      state: 'Happy',
      RegionId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Weedle',
      state: 'Lazy',
      RegionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kakuna',
      state: 'Strong',
      RegionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Beedrill',
      state: 'Angry',
      RegionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pidgey',
      state: 'Timid',
      RegionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pidgeotto',
      state: 'Relaxed',
      RegionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pidgeot',
      state: 'Serious',
      RegionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rattata',
      state: 'Mild',
      RegionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Raticate',
      state: 'Lonely',
      RegionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Spearow',
      state: 'Timid',
      RegionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Fearow',
      state: 'Brave',
      RegionId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ekans',
      state: 'Bold',
      RegionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Arbok',
      state: 'Bold',
      RegionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Pikachu',
      state: 'Naive',
      RegionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Raichu',
      state: 'Sassy',
      RegionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sandshrew',
      state: 'Impish',
      RegionId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sandslash',
      state: 'Serious',
      RegionId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Porygon',
      state: 'Adamant',
      RegionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pokemons', null, {});
  }
};
