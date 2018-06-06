const db = require('../models/index')
const Pickup = db.pickup

class PickupsController {
  static index(request, response, next){
    Pickup.findAll({
      attributes: ['id', 'date', 'accepted_items'],
      order: ['date'],
      include: [
        { association: 'zipcodes', where: request.query, attributes: [] },
        { model: db.organization, attributes: ['name', 'logo'] }
      ]
    })
    .then(pickups => response.json(pickups))
  }

  static create(request, response, next){
    request.body.organization_id = request.params.organization_id
    Pickup.create(request.body, { validate: true })
    .then(pickup => response.sendStatus(200))
    .catch(errors => response.status(400).json(errors))
  }

  static show(request, response, next){

  }
}

module.exports = PickupsController
