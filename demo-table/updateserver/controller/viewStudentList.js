var connectionProvider=require('./../conn_details/connect-con');
module.exports.viewStudentList=function(req,res)
{
    var sql="SELECT * FROM attendance WHERE date ="+ req.body.date;
    var connection =connectionProvider.getSqlConnection();
    connection.query(sql, function (error, results, fields) 
    {
      if (error) 
      {
            res.json({
            status:false,
            message:'there are some error with query !!!'
            })
      }else
      { 
        if(results.length >0)
        {
                    res.json({
                    status:true,
                    data:results,
                    message:'successfully authenticated'
                });
        }
        else
        {
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
