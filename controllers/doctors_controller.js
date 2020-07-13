const Doctor=require('../models/doctor');
const jwt=require('jsonwebtoken');

module.exports.register=function(req,res){
    
    try{

        Doctor.create(req.body,function(err,user){

            if(err){
                return res.json(422,{
                    err:err,
                    message:"Error in registring doctor"
                });
            }
                return res.json(200,{
                    message:"Registration Successfull"
                });
          });
    }catch(err){
        return res.json(500,{
            message:"Internal Server error"
        });
    }
}


module.exports.login= async function(req,res){
    try{

        let doctor = await Doctor.findOne({username: req.body.username});

        if(!doctor || doctor.password != req.body.password){
            return res.json(422,{
                message:"Invalid username or password"
            });

        }

        return res.json(200,{
            message:"Sign in successful, here's your token please keep it safe.",
            data:{
                token:jwt.sign(doctor.toJSON(),'ensureauthenticate',{expiresIn: '10000000'})
            },

        })

    }catch(err){
        return res.json(500,{
            err: err,
            message: "Internal Server error"
        });
    }
}
