'use strict';
module.exports = (sequelize, DataTypes) => {
  const PickupZipcode = sequelize.define('PickupZipcode', {
    zipcode: DataTypes.STRING
  }, {});
  PickupZipcode.associate = (models) => {
    PickupZipcode.belongsTo(models.Pickup)
  };
  return PickupZipcode;
};
