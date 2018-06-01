'use strict';
module.exports = (sequelize, DataTypes) => {
  const ContactPerson = sequelize.define('contact_person', {
    organization_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.organization,
        key: 'id'
      }
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    phone: DataTypes.BIGINT
  }, {
    underscored: true
  });
  ContactPerson.associate = (models) => {
    ContactPerson.belongsTo(models.organization)
  };
  return ContactPerson;
};
