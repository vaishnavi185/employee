const express = require ('express');
const mongoose = require('mongoose');
const connect = require('./Config/database');
const userRoute = require('./Routes/userRoute');
const app=express();
const upload = require('./Middleware/Upload');
const path = require('path')
const cookieParser = require('cookie-parser');


const port =process.env.Port || 3000;
const DatabaseURL = process.env.DATABASE_URL;
connect(DatabaseURL)
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // your frontend origin
  credentials: true               // allow cookies
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json())
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send("hello server")
})

app.get('/check-cookies', (req, res) => {
  console.log("Cookies:", req.cookies);
  res.json({ cookies: req.cookies });
});



app.use('/user', userRoute);

app.listen(port,()=>{
    console.log(`server is running on port`,port);
    console.log(`http://localhost:${port}`);
})