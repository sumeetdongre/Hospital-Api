const Patient=require('../models/patient');
const Doctor=require('../models/doctor');
const Report=require('../models/report');

var jwt=require('jsonwebtoken');

module.exports.register=function(req,res){
    try{

        Patient.findOne({ phone:req.body.phone }, function(err, patient){
            if(!patient){
                Patient.create(req.body, function(err,user){
                    if(err){
                        return res.json(422,{
                            err: err,
                            message: "Error in registering doctor"
                        });
                    }

                    return res.json(200,{
                        message: "Registration Successfull"
                    })
                });
            }else{
                return res.json(200,{
                    message: "Patient Already Registered",
                    patient_info: patient
                })
            }
        });


    }catch(err){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}


module.exports.createReport=function(req,res){
    try{

        var token=req.headers['access-token'];

        if(!token) 
        {
            return res.json(401,{
                message: "No token Provided"
            })
        }

        jwt.verify(token,'covid19',function(err,patientid){
           
            if(err){
                return res.json(500,{
                    message: "Failed to authenticate token"
                });
            }

            Doctor.findById(patientid._id,function(err,doctor){
                console.log(patientid._id);
                if(err){
                    return res.json(500,{
                        message: "session expired"
                    });
                }

                    if(!doctor){
                        return res.json(404,{
                            message: "no doctor found"
                        });
                    }

                Report.create({
                    patient: req.params.id,
                    doctor:doctor.username,
                    status: req.body.status,
                    date: new Date(),
                },function(err,user){
                    if(err){
                        return res.json(422,{
                            err: err,
                            message: "Error in creating patient report"
                        })
                    }
                    return res.json(200, {
                        message: "Report created successfully"
    
                    });

                });
    
            })


        })


    }catch(err){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}


module.exports.allreports=function(req,res){
    try{

        Report.find({patient:req.params.id}).sort({ date: 'desc'}).exec(function(err,reports){
            return res.json(200,{
                all_reports: reports
            });
        });

    }catch(err){
        return res.json(500,{
            message: "Internal Server Error"
        });
    }
}