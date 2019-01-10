
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Request = require("request");
var authenticateController=require('./controller/authenticatecontroller');
var demoController=require('./controller/demo');
var app = express();
var secureRoutes=express.Router();
var port=9000;
var jwt= require('jsonwebtoken');
process.env.SECRET_KEY="snigdha";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/secured',secureRoutes);
secureRoutes.use(function(req,res,next){
    //var token=token;
     var token=req.body.token; 
     console.log("the value is:"+token);
    if(token)
    {       
        jwt.verify(token, process.env.SECRET_KEY, function(err, decode)
    {
        if(err)
        {
            res.send("Your token is Invalid !!! Please send a valid token !!!");
        }
        else{
            next();
        }
    }); 
    }else{
        res.send("Please send a token !!!");
           }
});
app.get('/api/authenticate',authenticateController.authenticate);
secureRoutes.post('/demo',demoController.demo);
console.log("Server is running babe on the port number "+port);
app.listen(9000);
