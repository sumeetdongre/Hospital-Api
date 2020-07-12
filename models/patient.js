const mongoose=require('mongoose');

//creating patient schema
const patientSchema=new mongoose.Schema({
    
    phone:{
        type:String,
        required:true,
        unique: true
    },

},{
    timestamps:true
});

const Patient=mongoose.model('Patient', patientSchema);

module.exports=Patient;
