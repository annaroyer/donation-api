const db = require('../models/index')

class OrganizationsController {
  static index(request, response, next){
    db.Organization.all()
    .then(organizations => {
      response.json(organizations)
    })
  }
}

module.exports = OrganizationsController
