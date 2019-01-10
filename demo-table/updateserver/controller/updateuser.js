var connectionProvider = require('./../conn_details/connect-con');

module.exports.update_user = function (req, res) {

    var email = req.body.email;

    var users = {
        "phone": req.body.phone,
        "username": req.body.username,
        "password": req.body.password
    }

    //var sql="UPDATE updatinguser SET ? WHERE email = ?'"+[users,email]+"' ";
    //console.log(sql);
    var connection = connectionProvider.getSqlConnection();
    //connection.query(sql, function (error, results, fields) {
    connection.query('UPDATE updatinguser SET ? WHERE email = ?', [users, email], function (error, results, fields) {

        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query !!!'+error
            })
        } else {
            res.json({
                status: true,
                data: results,
                message: 'successfully updated'
            })

        }
    });
    connectionProvider.closeSqlConnection(connection);

}

