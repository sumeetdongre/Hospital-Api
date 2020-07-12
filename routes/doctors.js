const express=require('express');

const router=express.Router();

const doctorController=require('../controllers/doctors_controller');

router.post('/register',doctorController.register);

router.post('/login',doctorController.login);

module.exports=router;