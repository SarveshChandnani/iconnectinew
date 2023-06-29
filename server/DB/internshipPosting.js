const mongoose = require('mongoose');

const postingSchema = new mongoose.Schema({
    areaofwork: String,
    date:String,
    duration:Number,
    stipend:String,
    hoursweek:Number,
    locationofwork : String,
    typeofengagement:String,
    vacancy:Number,
    userID: String
    
});


const Posting = mongoose.model('internshipPosting' ,postingSchema);

module.exports = Posting;