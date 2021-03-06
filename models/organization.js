'use strict';
const validations = require('../services/validations')

module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('organization', {
    name:  {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    website: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: {
          args: true,
          msg: "Website must be a url"
        }
      }
    },
    logo: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
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
    underscored: true,
    timestamps: false,
    indexes: [
      { unique: true, fields: ['name'] }
    ]
  });
  Organization.associate = (models) => {
    Organization.hasMany(models.pickup)
    Organization.hasMany(models.subscription)
    Organization.hasOne(models.contact_person)
  };
  return Organization;
};
