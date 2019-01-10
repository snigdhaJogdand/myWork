var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.entry=function(req,res){
    console.log(req.body);
    var users={
        "className":req.body.class,
        "standard":req.body.standard
    }
    var sql = " SELECT * FROM studentregistration WHERE class='" + users.className + "' AND standard='"+ users.standard + "' ";
    var connection =connectionProvider.getSqlConnection();
    console.log("SQL: ",sql)
    connection.query(sql, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'+error
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'SUCCESS'
        })
      }
    });
    connectionProvider.closeSqlConnection(connection);
}