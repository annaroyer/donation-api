'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pickup_item_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pickup_id: {
        type: Sequelize.INTEGER,
        field: 'pickup_id',
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'pickups',
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
    return queryInterface.dropTable('pickup_item_categories');
  }
};
