'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('donor_pickups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pickup_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      donor_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('donor_pickups');
  }
};
