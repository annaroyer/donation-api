'use strict';
module.exports = (sequelize, DataTypes) => {
  const Donor = sequelize.define('donor', {
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
    Donor.belongsToMany(models.pickup, { through: 'donor_pickup' })
    Donor.belongsToMany(models.organization, { through: 'subscription' })
  };
  return Donor;
};
