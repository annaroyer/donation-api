'use strict';

const pickups = require('../data/pickups')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pickups', pickups, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pickups', null, {});
  }
};
