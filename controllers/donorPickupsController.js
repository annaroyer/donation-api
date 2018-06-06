const db = require('../models')
const DonorPickup = db.donor_pickup

class DonorPickupsController {
  static create(request, response, next){
    request.body.pickup_id = request.params.pickup_id
    DonorPickup.create(request.body, { validate: true })
    .then(donor => response.redirect(`${request.originalUrl}/${donor.id}`))
    .catch(errors => response.status(400).json(errors))
  }

  static show(request, response, next){
    DonorPickup.findById(request.params.id, {
      attributes: { exclude: ['id', 'pickup_id', 'updated_at', 'created_at'] },
      include: [
        { association: 'pickup', attributes: ['date'],
          include: { association: 'organization', attributes: ['name'] }
        }
      ]
    })
    .then(donor => response.json(donor))
  }
}

module.exports = DonorPickupsController
