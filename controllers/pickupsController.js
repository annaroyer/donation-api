const db = require('../models/index')
const Pickup = db.pickup

class PickupsController {
  static index(request, response, next){
    Pickup.findAll({
      attributes: ['date', 'accepted_items'],
      order: ['date'],
      include: [
        { association: 'zipcodes', where: request.query, attributes: [] },
        { model: db.organization, attributes: ['name', 'logo'] }
      ]
    })
    .then(pickups => response.json(pickups))
  }
}

module.exports = PickupsController
