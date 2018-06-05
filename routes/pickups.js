const express = require('express');
const router = express.Router();

const PickupsController = require('../controllers/pickupsController')
const DonorPickupsController = require('../controllers/donorPickupsController')

router.get('/', PickupsController.index);
router.post('/:pickup_id/donors', DonorPickupsController.create)
router.get('/:pickup_id/donors/:id', DonorPickupsController.show)

module.exports = router;
