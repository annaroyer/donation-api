'use strict';
module.exports = (sequelize, DataTypes) => {
  const PickupItemCategory = sequelize.define('pickup_item_category', {
    pickup_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.pickup,
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
  PickupItemCategory.associate = (models) => {
    
  };
  return PickupItemCategory;
};
