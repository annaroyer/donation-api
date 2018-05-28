const db = require('../models/index')

class OrganizationsController {
  static index(request, response, next){
    db.Organization.findAll({
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
    })
    .then(organizations => {
      response.json(organizations)
    })
  }
}

module.exports = OrganizationsController
