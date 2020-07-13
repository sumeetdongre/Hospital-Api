const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patients_controller');

//created patient register route
router.post('/register',patientController.register);

// created patient create_report route through patient id
router.post('/:id/create_report',patientController.createReport);

// created patient route to serach all report of specific patient
router.post('/:id/all_reports',patientController.allreports);

module.exports = router;