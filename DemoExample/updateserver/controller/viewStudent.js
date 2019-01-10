var connectionProvider = require('./../conn_details/connect-con');
module.exports.viewStudent = function (req, res) {
    var sql = "SELECT * FROM studentregistration";
    // var sql = "SELECT * FROM attendance";
    console.log(sql)
    var connection = connectionProvider.getSqlConnection();
    connection.query(sql, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query !!!' + error
            })
        } else {
            if (results.length > 0) {
                res.json({
                    status: true,
                    data: results,
                    message: 'Data fetched !'
                });
            }
            else {
                res.json({
                    status: false,
                    data: results,
                    message: 'Data not found'
                })
            }
        }
    });
    connectionProvider.closeSqlConnection(connection);
}
