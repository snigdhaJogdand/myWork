var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.demo=function(req,res){
    console.log(req.body);
    email=req.body.email;
    phone=req.body.phone;
    username=req.body.username;
    password=req.body.password;
    token=req.body.token;
     var connection =connectionProvider.getSqlConnection();
     console.log(email);
    connection.query("INSERT INTO updatinguser Values('"+email+"','"+phone+"','"+username+"','"+password+"')", function (error, results, fields)
     {
        if (error) {
            console.log(error);
          res.json({
              status:false,
              message:'There are some error with query'+error+' ,'+results+' ,'+fields
          })
        }
        else{
            res.json({
            status:true,
            data:results,
            message:token
        })

/*

            connection.query("INSERT INTO tokentable Values('"+token+"')", function (error, results, fields)
        {
            if(error)
            {
                console.log(error);
                res.json({
                    status:false,
                    message:'there are some error with query'+error+' ,'+results+' ,'+fields
                })
            }
            else{
                console.log("value of token is"+ token);
            }

        });
*/
        
     }
    });
    
    connection.query("INSERT INTO tokentable Values('"+token+"')", function (error, results, fields)
    {
        if(error)
        {
            console.log(error);
            res.json({
                status:false,
                message:'there are some error with query'+error+' ,'+results+' ,'+fields
            })
        }
        else{
            console.log("value of token is"+ token);
        }

    });
    connectionProvider.closeSqlConnection(connection);
}