'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('donors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        isEmail: true,
        notEmpty: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      streetAddress: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.TEXT
      },
      first_name: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      zipcode: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Date.now(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Date.now(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('donors');
  }
};
