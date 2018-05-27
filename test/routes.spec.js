const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app.js')

chai.use(chaiHttp);

describe('API Routes', () => {
  describe('GET /api/v1/organizations', () => {
    it('returns all organizations', (done) => {
      chai.request(server)
      .get('/api/v1/organizations')
      .end((error, response) => {
        if (error) done(error)

        response.should.have.status(200)
        done()
      })
    })
  })
})
