'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    phone: DataTypes.BIGINT,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      isIn: [['user', 'admin']],
      defaultValue: 'user'
    }
  }, {
    underscored: true
  });
  User.associate = (models) => {
    User.hasMany(models.address)
  };
  return User;
};
