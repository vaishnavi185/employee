const express = require('express');
const route = express.Router();
const  { registerUser,loginUser } = require('../Controllers/UserController');
const { FormController } = require('../Controllers/ProfileController');
const Auth = require('../Middleware/Auth');
const upload = require('../Middleware/Upload');
route.post('/registration',registerUser);

route.post('/login',loginUser);
route.post('/Form', Auth, upload.single('profilePicture'), FormController);
module.exports=route;