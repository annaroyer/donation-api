'use strict';
const validations = require('../services/validations')

module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('organization', {
    name:  DataTypes.STRING,
    description: DataTypes.TEXT,
    website: {
      type: DataTypes.TEXT,
      isUrl: true
    },
    logo: {
      type: DataTypes.TEXT,
      isUrl: true
    },
    image: {
      type: DataTypes.TEXT,
      isUrl: true
    },
    accepted_items: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      validate: validations.allValidCategories
    },
    status: {
      type: DataTypes.STRING,
      isIn: [['pending', 'accepted', 'rejected', 'active']],
      defaultValue: 'pending'
    }
  }, {
    defaultScope: {
      where: { status: 'active' }
    },
    underscored: true
  });
  Organization.associate = (models) => {
    Organization.hasMany(models.pickup)
    Organization.hasMany(models.subscription)
    Organization.hasOne(models.contact_person)
  };
  return Organization;
};
