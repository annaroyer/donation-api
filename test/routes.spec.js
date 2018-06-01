const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')

chai.use(chaiHttp);

const db = require('../models/index')

describe('API Routes', function() {
  this.timeout(0)
  before(() => {
    return db.sequelize.sync({ force: true })
    .then(() => {
      db.organization.bulkCreate(require('../data/organizations'))
      db.pickup.bulkCreate(require('../data/pickups'))
      db.pickup_zipcode.bulkCreate(require('../data/pickupZipcodes'))
    })
    .then(data => Promise.resolve(data))
    .catch(error => console.error(error))
  })

  describe('GET /api/v1/organizations', () => {
    it('returns all organizations', () => {
      return chai.request(server)
      .get('/api/v1/organizations')
      .then(response => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.deep.equal(require('./fixtures/organizations'))
      })
    })
  })

  describe('GET /api/v1/pickups', () => {
    it('returns all pickups within the given zipcode', () => {
      return chai.request(server)
      .get('/api/v1/pickups?zipcode=80303')
      .then(response => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.deep.equal(require('./fixtures/pickups'))
      })
    })
  })
})
