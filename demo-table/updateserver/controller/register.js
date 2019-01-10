var mysql = require('mysql');
var connectionProvider = require('../conn_details/connect-con');
module.exports.register = function (req, res) {
    console.log(req.body);
    email = req.body.email;
    phone = req.body.phone;
    username = req.body.username;
    password = req.body.password;

    var connection = connectionProvider.getSqlConnection();
    connection.query("INSERT INTO updatinguser(email,phone,username,password) Values('" + email + "','" + phone + "','" + username + "','" + password + "')", function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query' + error + ' ,' + results + ' ,' + fields
            })
        }
        else {
            res.json({
                status: true,
                data: results,
                message: 'Data Entered sucessfully !!'
            });
        }
        connectionProvider.closeSqlConnection(connection);
    });
}