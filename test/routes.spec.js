const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')

chai.use(chaiHttp);

const models = require('../models')
const organizations = require('../data/organizations')

describe('API Routes', () => {
  beforeEach(() => {
    return models.sequelize.sync({ force: true })
    .then(() => models.Organization.bulkCreate(organizations))
    .then(data => Promise.resolve(data))
  })

  describe('GET /api/v1/organizations', () => {
    it('returns all organizations', function() {
      return chai.request(server)
      .get('/api/v1/organizations')
      .then(response => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.deep.equal(organizations)
      })
    })
  })
})
