'use strict';
module.exports = (sequelize, DataTypes) => {
  const PickupZipcode = sequelize.define('pickup_zipcode', {
    zipcode: DataTypes.STRING,
    pickup_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.pickup,
        key: 'id'
      }
    }
  }, {
    underscored: true,
    timestamps: false
  });
  PickupZipcode.associate = (models) => {
    PickupZipcode.belongsTo(models.pickup)
  };
  return PickupZipcode;
};
