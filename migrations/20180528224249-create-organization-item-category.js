'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('organization_item_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organization_id: {
        type: Sequelize.INTEGER,
        field: 'organization_id',
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'organizations',
          key: 'id'
        }
      },
      item_category_id: {
        type: Sequelize.INTEGER,
        field: 'item_category_id',
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'item_categories',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('organization_item_categories');
  }
};
