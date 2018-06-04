const Organization = require('../models').organization

class OrganizationsController {
  static index(request, response, next){
    Organization.findAll({
      attributes: ['id', 'name', 'description', 'website', 'image', 'logo', 'accepted_items']
    })
    .then(organizations => response.json(organizations))
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
