const db = require('../models/index')
const Pickup = db.pickup
const pry = require('pryjs')

class PickupsController {
  static index(request, response, next){
    Pickup.findAll({
      attributes: ['date'], order: ['date'],
      include: [
        { association: 'zipcode',
          where: request.query,
          attributes: []
        },
        { model: db.organization,
          attributes: ['name', 'logo']
        },
        { model: db.item_category,
          as: 'acceptedItems',
          attributes: ['name'],
          through: {attributes: []}
        }
      ]
    })
    .then(pickups => {
      response.json(pickups)
    })
  }
}

module.exports = PickupsController
