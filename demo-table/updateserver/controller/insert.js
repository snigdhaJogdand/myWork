var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.register=function(req,res){
    console.log(req.body);
    var users={
        "name":req.body.name,
        "username":req.body.username
    }
   // console.log(req.body.username);
    var connection =connectionProvider.getSqlConnection();
    connection.query("INSERT INTO update_user(name,username) Values('"+users.name+"','"+users.username+"')", function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'+error+''+results+''+fields+''+users.name
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
    connectionProvider.closeSqlConnection(connection);
}