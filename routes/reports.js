const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reports_controller');


// created report route to find the status of patient
router.post('/:status',reportController.reports);

module.exports = router;