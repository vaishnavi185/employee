const express = require ('express');
const mongoose = require('mongoose');
const connect = require('./Config/database');
const userRoute = require('./Routes/userRoute');
const app=express();

const port =process.env.Port || 3000;
const DatabaseURL = process.env.DATABASE_URL;
connect(DatabaseURL)
const cors = require('cors');
app.use(cors());


app.get('/',(req,res)=>{
    res.send("hello server")
})
app.use(express.json())
app.use('/user', userRoute);

app.listen(port,()=>{
    console.log(`server is running on port`,port);
    console.log(`http://localhost:${port}`);
})