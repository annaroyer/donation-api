const Organization = require('../models').organization

class OrganizationsController {
  static index(request, response, next){
    Organization.findAll({
      attributes: { exclude: ['status'] }
    })
    .then(organizations => response.json(organizations))
  }

  static show(request, response, next){
    Organization.findById(request.params.id, {
      attributes: { exclude: ['status'] },
      include: [{
        association: 'pickups', attributes: ['date', 'accepted_items'],
        include: { association: 'zipcodes', attributes: ['zipcode'] }
      }]
    })
    .then(organization => {
      if(organization) { response.json(organization) }
      else { response.sendStatus(404) }
    })
  }

  static create(request, response, next) {
    Organization.create( request.body,
      { include: [ 'contact_person' ] },
      { validate: true }
    )
    .then(organization => response.sendStatus(204))
    .catch(errors => response.status(400).json(errors))
  }
}

module.exports = OrganizationsController
