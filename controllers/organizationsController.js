const Organization = require('../models').organization
const pry = require('pryjs')

class OrganizationsController {
  static index(request, response, next){
    Organization.findAll({
      attributes: ['name', 'description', 'website', 'image', 'logo']
    })
    .then(organizations => response.json(organizations))
  }
}

module.exports = OrganizationsController
