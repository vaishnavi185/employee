const express = require('express');
const User = require('../Model/data');

const registerUser =async(req,res)=>{
   const {name ,email,phone,passward } =req.body;

   
    
      
      if(!name || !email || !phone || !passward){
        return res.status(400).json({message :"all fields are require"})
      }

      const userexist = await User.findOne({ email });
    if (userexist) {
        return res.status(400).json({ message: "User with this email already exists" });
    }
    
const userphone= await User.findOne({ phone });
    if (userphone) {
        return res.status(400).json({ message: "User with this phone number already exists" });
    }

     const newuser = await User.create({
        name,
        email,
        phone,
        passward, // Save the hashed password
    });
     if (newuser) {
        res.status(201).json({
           success: true,
      message: "User created successfully",
            _id: newuser._id,
        
            name: newuser.name,
            email: newuser.email,
            phone: newuser.phone,
            passward: newuser.passward, // Return the hashed password
        });

    } else {
        res.status(400).json({ message: "User not created" });
    }

   

}


const loginUser = async (req, res) => {
  const { email, passward } = req.body;


  if (!email || !passward) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (user && user.passward === passward) {
      return res.status(200).json({
        success: true,
        message: "Login successful",
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        passward: user.passward // In real apps, don't return passwords
      });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports={registerUser,loginUser}