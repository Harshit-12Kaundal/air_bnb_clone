const express= require('express');
const app= express();
const cors = require('cors');


app.get("/test" , (req,res)=>{
    res.json("ok test");
});

app.listen(5000);
