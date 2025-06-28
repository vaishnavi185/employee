const express = require('express');
const User = require('../Model/data');

const registerUser =async(req,res)=>{
   const {name ,email,phone,passward } =req.body;

   
      const user = new User({
        name,email,phone,passward
      })
      if(!name || !email || !phone || !passward){
        return res.status(400).json({message :"all fields are require"})
      }

      const userexist = await user.findOne({ email });
    if (userexist) {
        return res.status(400).json({ message: "User with this email already exists" });
    }
    
const userphone= await user.findOne({ phone });
    if (userexist) {
        return res.status(400).json({ message: "User with this phone number already exists" });
    }

     const newuser = await user.create({
        name,
        email,
        phone,
        passward, // Save the hashed password
    });
     if (newuser) {
        res.status(201).json({
            _id: newuser._id,
            name: newuser.name,
            email: newuser.email,
            isAdmin: newuser.isAdmin,
            token: generateToken(newuser._id),
        });
    } else {
        res.status(400).json({ message: "User not created" });
    }

   

}

module.exports={registerUser}