const express=require('express');
const router=express.Router();

const doctorController=require('../controllers/doctors_controller');

// created register route of doctor
router.post('/register',doctorController.register);

// created register route of doctor
router.post('/login',doctorController.login);

module.exports=router;