'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pickup_zipcodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zipcode: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING,
      },
      pickup_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pickup_zipcodes');
  }
};
