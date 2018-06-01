'use strict';

const organizationItemCategories = require('../data/organizationItemCategories')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('organization_item_categories',
        organizationItemCategories, {}
     );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('organization_item_categories', null, {});
  }
};
