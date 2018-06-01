'use strict';

const organizations = require('../data/organizations')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('organizations', organizations);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('organizations', null, {});
  }
};
