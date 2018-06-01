'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('address', {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.user,
        key: 'id'
      }
    },
    street_address: DataTypes.TEXT,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    primary: DataTypes.BOOLEAN
  }, {
    underscored: true
  });
  Address.associate = (models) => {
    Address.belongsTo(models.user)
  };
  return Address;
};
