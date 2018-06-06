module.exports = {
  "development": {
    "username": "annaroyer",
    "password": null,
    "database": "donation_api_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "annaroyer",
    "password": null,
    "database": "donation_api_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres"
  }
}
