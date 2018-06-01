const db = require('../models/index')
const Pickup = db.pickup
const pry = require('pryjs')

class PickupsController {
  static index(request, response, next){
    Pickup.findAll({
      attributes: ['date', ['accepted_items', 'acceptedItems']],
      order: ['date'],
      include: [
        { association: 'zipcode', where: request.query, attributes: [] },
        { model: db.organization, attributes: ['name', 'logo'] }
      ]
    })
    .then(pickups => response.json(pickups))
  }
}

module.exports = PickupsController
