const express = require ('express');

const app=express();

const port =process.env.Port || 3000;


app.get('/',(req,res)=>{
    res.send("hello server")
})

app.listen(port,()=>{
    console.log(`server is rumming on port`,port);
    console.log(`http://localhost:${port}`);
})