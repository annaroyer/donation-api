const db = require('../models/index')

class OrganizationsController {
  static index(request, response, next){
    db.Organization.findAll()
    .then(organizations => {
      response.json(organizations)
    })
  }
}

module.exports = OrganizationsController
