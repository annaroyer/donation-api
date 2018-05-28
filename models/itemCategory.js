'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemCategory = sequelize.define('ItemCategory', {
    name: DataTypes.STRING
  }, {});
  ItemCategory.associate = (models) => {
    ItemCategory.belongsToMany(models.Pickup, { through: 'PickupItemCategory' })
    ItemCategory.belongsToMany(models.Organization, { through: 'OrganizationItemCategory' })
  };
  return ItemCategory;
};
