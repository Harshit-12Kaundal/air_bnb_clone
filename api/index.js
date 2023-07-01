const express= require('express');
const app= express();
const cors = require('cors');
const mongoose =require('mongoose');
require('dotenv').config()

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5173',

}));

mongoose.connect(process.env.MONGO_URL);



app.get('/test' , (req,res)=>{
    res.json("ok test");
});

app.post('/register',(req, res)=>{
    const{name, email,password}=req.body;
    res.json({name, email,password});
});

app.listen(4000);
