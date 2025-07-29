const express = require('express');
const route = express.Router();
const  { registerUser,loginUser, logoutUser } = require('../Controllers/UserController');
const { FormController ,getForm,updatedprofile} = require('../Controllers/ProfileController');
const Auth = require('../Middleware/Auth');
const upload = require('../Middleware/Upload');
route.post('/registration',registerUser);

route.post('/login',loginUser);
route.post('/Form', Auth, upload.single('profilePicture'), FormController);
route.get('/getform',Auth,getForm)
route.get('/me', Auth, (req, res) => {
  res.json({
    success: true,
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    phone: req.user.phone
  });
});
route.put("/update", Auth, upload.single("profilePicture"), updatedprofile);
route.post('/logout',Auth,logoutUser)
module.exports=route;