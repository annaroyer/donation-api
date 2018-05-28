const db = require('../models/index')

class PickupsController {
  static index(request, response, next){
    response.json([{}])
  }
}

module.exports = PickupsController
