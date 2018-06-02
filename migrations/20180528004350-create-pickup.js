'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pickups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      organization_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: 'organizations',
          key: 'id'
        }
      },
      accepted_items: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pickups');
  }
};
