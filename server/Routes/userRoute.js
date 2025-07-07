const express = require('express');
const route = express.Router();
const  { registerUser,loginUser } = require('../Controllers/UserController');
const { FormController } = require('../Controllers/ProfileController');
const Auth = require('../Middleware/Auth');

route.post('/registration',registerUser);

route.post('/login',loginUser);

route.post('/Form',Auth,FormController)
module.exports=route;