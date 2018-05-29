'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pickup = sequelize.define('pickup', {
    date: {
       type: DataTypes.DATE,
       get() {
         let options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'}
         return this.getDataValue('date').toLocaleDateString('en-US', options)
       }
     },
     organization_id: {
       type: DataTypes.INTEGER,
       references: {
         model: sequelize.organization,
         key: 'id'
       }
     }
  }, {
    underscored: true,
    timestamps: false
  });
  Pickup.associate = (models) => {
    Pickup.belongsTo(models.organization)
    Pickup.hasMany(models.pickup_zipcode, {as: 'zipcode'})
    Pickup.belongsToMany(models.donor, {through: 'donor_pickup'})
    Pickup.belongsToMany(models.item_category,
      { through: 'pickup_item_category',
        as: 'acceptedItems',
        foreignKey: 'pickup_id',
        otherKey: 'item_category_id'
      })
  };
  return Pickup;
};
