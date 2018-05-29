'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemCategory = sequelize.define('item_category', {
    name: DataTypes.STRING
  }, {});
  ItemCategory.associate = (models) => {
    ItemCategory.belongsToMany(models.pickup,
      { through: 'pickup_item_category',
        foreignKey: 'item_category_id',
        otherKey: 'pickup_id'
      })
    ItemCategory.belongsToMany(models.organization,
      { through: 'organization_item_category',
        foreignKey: 'item_category_id',
        otherKey: 'organization_id'
      })
  };
  return ItemCategory;
};
