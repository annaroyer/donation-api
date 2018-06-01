'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pickup_item_categories',
        require('../data/pickupItemCategories'), {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('pickup_item_categories', null, {});
  }
};
