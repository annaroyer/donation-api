'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
        validate: { notEmpty: true }
      },
      description: {
        type: Sequelize.TEXT,
        validate: { notEmpty: true }
      },
      website: {
        type: Sequelize.TEXT,
        validate: { isUrl: true }
      },
      logo: {
        type: Sequelize.TEXT,
        validate: { notEmpty: true }
      },
      image: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable('organizations');
  }
};
