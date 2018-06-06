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
    street_address: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          args: true,
          msg: "Street Address cannot be blank"
        }
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "City cannot be blank"
        }
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "State cannot be blank"
        }
      }
    },
    zipcode: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Zipcode cannot be blank"
        }
      }
    },
    phone: DataTypes.BIGINT,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Must be a valid email address"
        },
        notEmpty: {
          args: true,
          msg: "Email cannot be blank"
        }
      }
    }
  }, {
    underscored: true
  });
  DonorPickup.associate = (models) => {
    DonorPickup.belongsTo(models.pickup)
  };
  return DonorPickup;
};
