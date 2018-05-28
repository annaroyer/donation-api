'use strict';
module.exports = (sequelize, DataTypes) => {
  var Donor = sequelize.define('Donor', {
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    streetAddress: DataTypes.TEXT,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Donor.associate = (models) => {
    Donor.belongsToMany(models.Pickup, { through: 'DonorPickup' })
    Donor.belongsToMany(models.Organization, { through: 'Subscription' })
  };
  return Donor;
};
