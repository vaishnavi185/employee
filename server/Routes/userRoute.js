const express = require('express');
const route = express.Router();
const  { registerUser } = require('../Controllers/UserController');

route.post('/registration',registerUser);


module.exports=route;