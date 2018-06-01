'use strict';
module.exports = (sequelize, DataTypes) => {
  const DonorPickup = sequelize.define('donor_pickup', {
    pickup_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.pickup,
        key: 'id'
      }
    },
    street_address: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    email: {
      type: DataTypes.STRING,
      isEmail: true
    }
  }, {
    underscored: true
  });
  DonorPickup.associate = (models) => {
    DonorPickup.belongsTo(models.pickup)
  };
  return DonorPickup;
};
