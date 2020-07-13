const express=require('express');
const router=express.Router();


//create intermediate route of doctors,patient,reports
router.use('/doctors',require('./doctors'));

router.use('/patients',require('./patients'));

router.use('/reports',require('./reports'));

module.exports=router;
