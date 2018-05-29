'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('organization', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.TEXT,
    logo: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {});
  Organization.associate = (models) => {
    Organization.hasMany(models.pickup)
    Organization.belongsToMany(models.item_category,
      { as: 'acceptedItems',
        through: 'organization_item_category',
        foreignKey: 'organization_id',
        otherKey: 'item_category_id'
      }
    )
  };
  return Organization;
};
