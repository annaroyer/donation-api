const express = require('express');
const router = express.Router();

const PickupsController = require('../controllers/pickupsController')

router.get('/', PickupsController.index);

module.exports = router;
