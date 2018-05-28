'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Donors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        validate: { isEmail: true, notEmpty: true }
      },
      phone: {
        type: Sequelize.BIGINT
      },
      streetAddress: {
        type: Sequelize.TEXT,
        validate: { notEmpty: true }
      },
      first_name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
      },
      last_name: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
      },
      zipcode: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
      },
      city: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
      },
      state: {
        type: Sequelize.STRING,
        validate: { notEmpty: true }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Donors');
  }
};
