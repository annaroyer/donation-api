'use strict';

const itemCategories = require('../data/itemCategories')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('item_categories', itemCategories, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('item_categories', null, {});
  }
};
