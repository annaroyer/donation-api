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

  describe('GET /api/v1/organizations/:id', () => {
    it('returns the organization with the given id', () => {
      return chai.request(server)
      .get('/api/v1/organizations/1')
      .then(response => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.deep.equal(require('./fixtures/organization'))
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

  describe('POST /api/v1/organizations', () => {
    it('creates a new organization and contact_person in the database', () => {
      return chai.request(server)
      .post('/api/v1/organizations')
      .send({ name: "Goodwill",
              description: "Goodwills meet the needs of all job seekers.",
              website: "http://www.goodwill.org/",
              contact_person:{ first_name: "Roberta",
                              last_name: "Goodenough",
                              email: "roberta@goodwill.com",
                              phone: 5434324231
                            }
      })
      .then(response => response.should.have.status(204))
      .then(() => {
        return db.organization.unscoped().count()
        .then(count => count.should.eq(4))
      })
      .then(() => {
        return db.contact_person.count()
        .then(count => count.should.eq(1))
      })
    })

    it('returns a 400 status code and error object if unsuccessful', () => {
      return chai.request(server)
      .post('/api/v1/organizations')
      .send({ name: "Goodwill",
              description: "Goodwills meet the needs of all job seekers.",
              website: "goodwill",
              contactPerson:{ first_name: "Roberta",
                              last_name: "Goodenough",
                              email: "robertag",
                              phone: 5434324231
                            }
      })
      .then(response => {
        response.should.have.status(400)
        response.body.errors[0].message.should.equal('Website must be a url')
        response.body.errors[0].path.should.equal('website')
      })
    })
  })
})
