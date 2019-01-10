var express = require('express');
var jwt= require('jsonwebtoken');
var app = express();
app.get('/api',(req,res)=>{
res.json({
    message:"heyy"
});
});
app.listen(9000);
console.log("server is running babe");

