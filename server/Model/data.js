const mongoose = require('mongoose');

const dataSchema= new mongoose.Schema({
    name: {type:String ,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String ,required:true,unique:true},
    passward:{type:String,required:true}
})

const User = mongoose.model('User',dataSchema);
module.exports=User;