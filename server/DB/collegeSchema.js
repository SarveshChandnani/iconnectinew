const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const collegeSchema = new mongoose.Schema({
    collegespocemail : String,
    password :String,
    confirmPassword: String,
    collegename : String,
    collegeaddress:String,
    collegespocname:String,
    collegespocphone : Number,
    collegeregid:String,
    degreeoffered:String,
});

collegeSchema.pre('save' , async function(next){
    console.log("hiiiiiiiiiiiii");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    }
    next();
});


const College = mongoose.model('collegeuser' ,collegeSchema);

module.exports = College;