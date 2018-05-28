'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.TEXT,
    logo: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {});
  Organization.associate = (models) => {
    Organization.hasMany(models.Pickup)
    Organization.belongsToMany(models.ItemCategory, { through: 'OrganizationItemCategory' })
  };
  return Organization;
};
