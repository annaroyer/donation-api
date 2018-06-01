'use strict';

const pickupZipcodes = require('../data/pickupZipcodes')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pickup_zipcodes', pickupZipcodes, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pickup_zipcodes', null, {});
  }
};
