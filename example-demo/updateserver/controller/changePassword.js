var mysql = require('mysql');
var connectionProvider = require('../conn_details/connect-con');

module.exports.changePassword = function (req, res) {
    var newPassword = req.body.newPassword;
    var data = {
        "password": req.body.oldPassword,
        "email": req.body.email
    }
    var connection = connectionProvider.getSqlConnection();
    connection.query('UPDATE updatinguser SET password = ? WHERE password=? AND email = ?', [newPassword, data.password, data.email], function (error, results) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query !!!' + error
            })
        } else {
            if (results.affectedRows == 0) {
                res.json({
                    status: false,
                    data: results,
                    message: 'Data not found' 
                })
            }
            else {
                res.json({
                    status: true,
                    data: results,
                    message: 'Data found'
                })
            }
        }
    });
    connectionProvider.closeSqlConnection(connection);
}