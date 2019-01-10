
var jwt= require('jsonwebtoken');
module.exports.authenticate=function(req,res)
{
    var user={
        m:'aaa',
        s:'aaa'
    };
    var token=jwt.sign(user,process.env.SECRET_KEY,{
        expiresIn:4000
          });
    
          res.json({
    message:"heyy",
    status:true,
    token:token
});
       
    console.log(token);
}
