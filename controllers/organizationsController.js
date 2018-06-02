const Organization = require('../models').organization

class OrganizationsController {
  static index(request, response, next){
    Organization.findAll({
      attributes: ['name', 'description', 'website', 'image', 'logo']
    })
    .then(organizations => response.json(organizations))
  }

  static create(request, response, next) {
    Organization.create( request.body,
      { include: [ 'contactPerson' ] },
      { validate: true }
    )
    .then(organization => response.sendStatus(200))
    .catch(errors => response.status(400).json(errors.message))
  }
}

module.exports = OrganizationsController
