const express = require('express')
const router = express.Router()

const PickupsController = require('../../controllers/pickupsController')

router.post('/', PickupsController.create)
router.get('/:id', PickupsController.show)

module.exports = router
