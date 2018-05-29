const Organization = require('../models').organization

class OrganizationsController {
  static index(request, response, next){
    Organization.findAll({
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
    })
    .then(organizations => response.json(organizations))
  }
}

module.exports = OrganizationsController
