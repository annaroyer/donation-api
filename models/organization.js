'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.TEXT,
    logo: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {});
  Organization.associate = function(models) {
    // associations can be defined here
  };
  return Organization;
};
