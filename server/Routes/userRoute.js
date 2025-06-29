const express = require('express');
const route = express.Router();
const  { registerUser,loginUser } = require('../Controllers/UserController');

route.post('/registration',registerUser);

route.post('/login',loginUser);
module.exports=route;