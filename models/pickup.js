'use strict';

const validations = require('../services/validations')

module.exports = (sequelize, DataTypes) => {
  const Pickup = sequelize.define('pickup', {
    date: {
       type: DataTypes.DATE,
       isAfter: Date.now(),
       get() {
         let options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'}
         return this.getDataValue('date').toLocaleDateString('en-US', options)
       }
     },
     organization_id: {
       type: DataTypes.INTEGER,
       references: {
         model: sequelize.organization,
         key: 'id'
       }
     },
     accepted_items: {
       type: DataTypes.ARRAY(DataTypes.STRING),
       validate: validations.allValidCategories
     }
  }, {
    underscored: true
  });
  Pickup.associate = (models) => {
    Pickup.belongsTo(models.organization)
    Pickup.hasMany(models.pickup_zipcode, {as: 'zipcodes'})
    Pickup.hasMany(models.donor_pickup)
  };
  return Pickup;
};
