var connectionProvider = require('./../conn_details/connect-con');

module.exports.view_user = function (req, res) {

  var email = req.body.email;
  var sql = " SELECT * FROM updatinguser WHERE email='" + email + "' ";
  console.log("sql", sql);
  var connection = connectionProvider.getSqlConnection();
  connection.query(sql, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query !!!'
      })
    } else {
      if (results.length > 0) {
        res.json({
          status: true,
          userList: results,
          message: 'successfully get data '
        })
      } else {
        res.json({
          status: false,
          data: results,
          message: 'data not found in the list !!!!'
        })
      }
    }
  });
  connectionProvider.closeSqlConnection(connection);

}

