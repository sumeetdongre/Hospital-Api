const mongoose = require('mongoose');

//creating report schema
const reportSchema = new mongoose.Schema({
    patient: {
        type:String,
    },
    doctor: {
        type: String,
       
    },
    status:{
        type: String,
        enum :  ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        default: 'Negative'
    },
    date:{
        type: String,
    }

},{
    timestamps: true
});

const Report = mongoose.model('Report', reportSchema);

//exporting reports schema
module.exports = Report;