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
      validate: {
        isEmail: {
          args: true,
          msg: "Email must be a valid email address"
        }
      }
    },
    phone: DataTypes.BIGINT
  }, {
    underscored: true,
    timestamps: false
  });
  ContactPerson.associate = (models) => {
    ContactPerson.belongsTo(models.organization)
  };
  return ContactPerson;
};
