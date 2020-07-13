const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patients_controller');

//creating the route to register the patient
router.post('/register', patientController.register);


router.post('/:id/create_report',patientController.createReport);


router.post('/:id/all_reports',patientController.allreports);

module.exports = router;