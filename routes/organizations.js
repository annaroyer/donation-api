const express = require('express')
const router = express.Router()

const OrganizationsController = require('../controllers/organizationsController')

router.get('/', OrganizationsController.index)

module.exports = router;
