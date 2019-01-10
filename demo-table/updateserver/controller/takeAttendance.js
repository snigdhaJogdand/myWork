//passport concept is used here
var mysql = require('mysql');
var connectionProvider = require('../conn_details/connect-con');
// var passport=require('passport');

module.exports.takeAttendance = function (req, res) {
    var connection = connectionProvider.getSqlConnection();
    rollNo = req.body.id;
    name = req.body.name;
    classNo = req.body.class;
    standard = req.body.standard;
    status = req.body.status;
    date = req.body.date;
    console.log(rollNo, name, classNo, status, date);
    connection.query("INSERT INTO attendance(rollNo,name,class,standard,status,date) Values('" + rollNo + "','" + name + "','" + classNo + "','" + standard + "','" + status + "','" + date + "')",
        function (error, results, fields) {
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