const express = require('express')
const router = express.Router()

const OrganizationsController = require('../controllers/organizationsController')

router.get('/', OrganizationsController.index)
router.post('/', OrganizationsController.create)

module.exports = router;
