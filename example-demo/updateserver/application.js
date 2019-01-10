var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Request = require("request");
var testController=require('./controller/test');
var test2controller=require('./controller/test2');
var session=require('express-session');

var cookieParser=require('cookie-parser');

var app = express();
var port=9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use(session({secret:'heybabe'}));
app.use(cookieParser());
// app.use(session({
//     key:'eid',
//     secret: 'heyyya',
//     resave: false,
//     saveUninitialized: true,
//     //cookie:{ path: '/test2', httpOnly: true, secure: false, maxAge: null }
//   }));

// app.use(session({
//         key:'sid',
//         secret: 'heyyya',
//         resave: false,
//         saveUninitialized: true,
//         cookie:{maxAge:1000}
//       }));

// app.use(cookieParser());
// app.use(require('express-session')
//        ({ secret:'secret',
//        resave:true,
//        saveUninitialized:false})
// );
// app.use(passport.initialize());
// app.use(passport.session());      


app.post('/api/test',testController.test_login);  
app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));}

);

console.log("server is running on port "+port);
app.listen(9000);
module.exports = app;

