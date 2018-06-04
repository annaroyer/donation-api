const express = require('express');
const router = express.Router();

const PickupsController = require('../controllers/pickupsController')
const DonorPickupsController = require('../controllers/donorPickupsController')

router.get('/', PickupsController.index);
router.post('/:id/donors', DonorPickupsController.create)

module.exports = router;
