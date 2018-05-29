'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('subscription', {
    donorId: DataTypes.INTEGER,
    organizationId: DataTypes.INTEGER
  }, {});
  Subscription.associate = (models) => {
    Subscription.belongsTo(models.donor)
    Subscription.belongsTo(models.organization)
  };
  return Subscription;
};
