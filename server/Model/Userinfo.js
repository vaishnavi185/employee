const mongoose = require('mongoose');
const User = require('./data')

const profileschema= new mongoose.Schema({

userId :{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
     reruired:true,
     unique:true
},

    Fullname: {type:String ,required:true},
    // email:{type:String,required:true,unique:true},
    // phone:{type:String ,required:true,unique:true},
Username:{type:String,required:true},
    Bio:{type:String,required:true},
    profilePicture: { type: String, default: '' }, 
    
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
})

const UserProfile = mongoose.model('UserPro',profileschema);
module.exports=UserProfile;