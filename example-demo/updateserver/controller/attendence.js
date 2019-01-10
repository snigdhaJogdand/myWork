var connectionProvider=require('./../conn_details/connect-con');
module.exports.attendence=function(req,res)
{
    console.log(sql);
    var dat=req.body.date;
    var clas=req.body.class;
   // console.log(select);
    var sql="SELECT * FROM attendance WHERE date='"+dat+"' AND class='"+clas+"' ";
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
