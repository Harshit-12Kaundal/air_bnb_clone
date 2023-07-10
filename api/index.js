const express= require('express');
const app= express();
const cors = require('cors');
const bcrypt =require('bcrypt');
const mongoose =require('mongoose');
const jwt= require('jsonwebtoken');
const User = require('./models/User.js');
require('dotenv').config()
const CookieParser=require('cookie-parser');

const bcryptSalt=bcrypt.genSaltSync(10);
const jwtSecret='jjncckjjdosmmdfba;ds;ldasn';

app.use(express.json());
app.use(CookieParser());

app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5173',

}));


mongoose.connect(process.env.MONGO_URL);



app.get('/test' , (req,res)=>{
    res.json("ok test");
});

app.post('/register',async(req, res)=>{
    const{name, email,password}=req.body;
    try{
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt),
        });
        res.json(userDoc);
    }catch{
        res.status(422).json(e);
    }

});

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const userDoc= await User.findOne({email});
    if(userDoc){
        const passOk=bcrypt.compareSync(password,userDoc.password);
        if(passOk){
            jwt.sign({email:userDoc.email,_id:userDoc._id}, jwtSecret,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json(userDoc);
            });
        }
        else{
            res.json('pass not ok');
        }
    }
    else{
        res.json('not found');
    }
});

app.get('/profile',(req,res)=>{
    const {token}=req.cookies;
    if(token){
        jwt.verify(token, jwtSecret,{},(err, user)=>{
        if(err) throw err;
        
        res.json(user);
    });
    }else{
        res.json(null);
    }
})


app.listen(4000);
