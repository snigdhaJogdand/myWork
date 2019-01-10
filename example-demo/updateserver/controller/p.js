var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.p=function(req,res)
{
console.log(req.body);
console.log("hey");
var email=req.body.email;
var pwd=req.body.password;
console.log("0");
var connection =connectionProvider.getSqlConnection();

passport.use('local',new LocalStrategy(
    {
        'lemail':email,
        'lpassword':pwd,
        passReqToCallback:true
    }, 
    function(req,email,pwd,done)
    {   console.log("1");
        if(!email || !pwd ) 
        { 
            return done(null, false); 
            console.log('All fields are required.');
        }
        connection.query("SELECT * FROM updatinguser WHERE email = ?", [email], function(err, rows)
        {
            console.log("2");
            console.log(err); 
            console.log(rows);
            if (err) 
            {
                console.log("3");
                console.log('invalid email or passowrd !!');
                return done(err);
            }  
            if(!rows.length)
            { 
                console.log("4");
                console.log('invalid email or passowrd !!');
                return done(null, false); 
            }
            return done(null, rows[0]);
        });
    }
    ));

    connection.query('SELECT LAST_INSERT_ID() as user_id',function(error,results,fields)
    {
            if (error)
            {
                console.log("the error is : "+error);
            }
            const user_id=results[0];
            console.log(user_id); 
    });

    passport.serializeUser(function(user_id, done)
    {
        console.log("5");
        done(null, user_id);
    });
    
    passport.deserializeUser(function(user_id, done)
    {  
        console.log("6");  
        connection.query("SELECT * FROM updatinguser WHERE id = "+ user_id, function (err, rows)
        {    
            done(err, rows[0]);
        });
    
    });
    console.log("bye");
connectionProvider.closeSqlConnection(connection);
}



// connection.query('SELECT * FROM updatinguser WHERE email=? and password=? ',[e,p], function (error, results, fields)
//      {
//       if (error) {
//         res.json({
//             status:false,
//             message:'there are some error with query'+error+' ,'+results+' ,'+fields
//         })
//       }
//       else{
//         if(results.length >0){
//             res.json({
//             status:true,
//             userList:results,
//              message:'Login sucessfully !!'
//         })

     

//       }
//       else{
//         res.json({
//             status:false,
//             data:results,
//             message:'Invalid Email and password !!'
//         })
//      }
//       }
//     });
    
