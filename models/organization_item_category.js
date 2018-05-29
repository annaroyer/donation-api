'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrganizationItemCategory = sequelize.define('organization_item_category', {
    organization_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.organization,
        key: 'id'
      }
    },
    item_category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.item_category,
        key: 'id'
      }
    }
  }, {
    underscored: true,
    timestamps: false
  });
  OrganizationItemCategory.associate = (models) => {

  };
  return OrganizationItemCategory;
};
