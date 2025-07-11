const mongoose = require('mongoose');

const profileschema= new mongoose.Schema({
    Fullname: {type:String ,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String ,required:true,unique:true},
Username:{type:String,required:true},
    Bio:{type:String,required:true},
    profilePicture: { type: String, default: '' }, 
    
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
})

const UserProfile = mongoose.model('UserPro',profileschema);
module.exports=UserProfile;