'use strict';
module.exports = (sequelize, DataTypes) => {
  const DonorPickup = sequelize.define('donor_pickup', {
    pickupId: DataTypes.INTEGER,
    donorId: DataTypes.INTEGER
  }, {});
  DonorPickup.associate = (models) => {
    DonorPickup.belongsTo(models.pickup)
    DonorPickup.belongsTo(models.donor)
  };
  return DonorPickup;
};
