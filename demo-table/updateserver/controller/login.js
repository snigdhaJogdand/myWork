var mysql = require('mysql');
var connectionProvider = require('../conn_details/connect-con');

module.exports.login_user = function (req, res) {
    console.log(req.body);
    var e = req.body.email;
    var p = req.body.password;
    console.log(e);
    console.log(p);
    //SELECT * FROM `updatinguser` WHERE email='b@gmail.com' AND password='123456';
    var connection = connectionProvider.getSqlConnection();
    connection.query('SELECT * FROM updatinguser WHERE email=? and password=? ', [e, p], function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query' + error + ' ,' + results + ' ,' + fields
            })
        }
        else {
            if (results.length > 0) {
                res.json({
                    status: true,
                    userList: results,
                    message: 'Login sucessfully !!'
                })
            }
            else {
                res.json({
                    status: false,
                    data: results,
                    message: 'Invalid Email and password !!'
                })
            }
        }
    });
    connectionProvider.closeSqlConnection(connection);
}