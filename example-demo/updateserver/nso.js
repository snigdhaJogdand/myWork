var express = require('express');
var request = require('request');
var port=9000;
var app = express();
console.log("In Function");

var options = {
  method:'POST',
  url: 'https://www.google.com' 
};

function callback(error, response, body) {
  console.log("In CallBack !!!");
if(error)
{   console.log("the error is : "+error);    }
}

request(options, callback);

console.log("server is running on port "+port);
app.listen(9000);