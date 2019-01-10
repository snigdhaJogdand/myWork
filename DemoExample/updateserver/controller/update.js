var connectionProvider=require('./../conn_details/connect-con');

module.exports.authenticate=function(req,res){
 
    var user=req.body.user;
    //var username=req.body.username;
    var sql=" SELECT * FROM update_user WHERE name='"+user+"' ";
    console.log(sql);
    var connection =connectionProvider.getSqlConnection();

//connection.query("SELECT * FROM update_user", function (error, results, fields) {

    connection.query(sql, function (error, results, fields) {
      if (error) {
            res.json({
            status:false,
            message:'there are some error with query !!!'+error
            })
      }else{ 
        if(results.length >0){
                    res.json({
                    status:true,
                    data:results,
                    //userList:results,
                    //u:results[0].name,
                    //n:results[0].username,
                    message:'successfully authenticated'+'<br>'+user
                })
              }else{
                res.json({
                    status:false,
                    data:results,
                    message:'data not found'
                })
              }
            }
        });
connectionProvider.closeSqlConnection(connection);

}
