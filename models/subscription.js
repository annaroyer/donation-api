'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('subscription', {
    subscriber_email: {
      type: DataTypes.TEXT,
      isEmail: true
    },
    organization_id: {
      type: DataTypes.INTEGER,
      references: {
        model: sequelize.organization,
        key: 'id'
      }
    }
  }, {
    underscored: true
  });
  Subscription.associate = (models) => {
    Subscription.belongsTo(models.organization)
  };
  return Subscription;
};
