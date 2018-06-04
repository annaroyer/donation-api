const db = require('../models')
const DonorPickup = db.donor_pickup
const pry = require('pryjs')

class DonorPickupsController {
  static create(request, response, next){
    request.body.pickup_id = request.params.id
    DonorPickup.create(request.body,{ validate: true })
    .catch(errors => response.status(400).json(errors))
    .then(donor => {
      DonorPickup.findOne({
        where: donor,
        attributes: { exclude: ['id', 'pickup_id', 'updated_at', 'created_at'] },
        include: [
          { association: 'pickup', attributes: ['date'],
            include: { association: 'organization', attributes: ['name'] }
          }
        ]
      })
      .then(donor => response.json(donor))
    })
  }
}

module.exports = DonorPickupsController
