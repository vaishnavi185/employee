const express = require('express');
const User = require('../Model/data');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  const { name, email, phone, passward } = req.body;

  if (!name || !email || !phone || !passward) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "User with this email already exists" });
  }

  const userPhone = await User.findOne({ phone });
  if (userPhone) {
    return res.status(400).json({ message: "User with this phone number already exists" });
  }

  const hashedPassword = await bcrypt.hash(passward, 10);

  const newUser = await User.create({
    name,
    email,
    phone,
    passward: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({
      success: true,
      message: "User created successfully",
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone
    });
  } else {
    res.status(400).json({ message: "User not created" });
  }
};

const loginUser = async (req, res) => {
  const { email, passward } = req.body;

  if (!email || !passward) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(passward, user.passward);

    if (isMatch) {
      return res.status(200).json({
        success: true,
        message: "Login successful",
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
