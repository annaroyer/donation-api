'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pickup = sequelize.define('Pickup', {
    date: DataTypes.DATE
  }, {});
  Pickup.associate = (models) => {
    Pickup.belongsTo(models.Organization)
    Pickup.hasMany(models.PickupZipcode)
    Pickup.belongsToMany(models.Donor, { through: 'DonorPickup' })
    Pickup.belongsToMany(models.ItemCategory, { through: 'PickupItemCategory' })
  };
  return Pickup;
};
