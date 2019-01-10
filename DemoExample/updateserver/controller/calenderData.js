
var connectionProvider=require('../conn_details/connect-con');
module.exports.calenderData=function(req,res){
    var sql = " SELECT * FROM attendance"// WHERE rollNo='" + rollNo;
    var connection =connectionProvider.getSqlConnection();
    console.log("SQL: ",sql)
    connection.query(sql, function (error, results, fields) {
        console.log(error)
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