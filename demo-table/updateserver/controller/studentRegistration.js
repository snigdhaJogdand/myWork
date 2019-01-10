//passport concept is used here
var mysql = require('mysql');
var connectionProvider = require('../conn_details/connect-con');
// var passport=require('passport');

module.exports.studentRegistration = function (req, res) {
    console.log(req.body);
    name = req.body.name;
    fatherName = req.body.fatherName;
    motherName = req.body.motherName;
    phone = req.body.phone;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    classNo = req.body.class;
    standard = req.body.standard;
    email = req.body.email;

    var connection = connectionProvider.getSqlConnection();
    connection.query("INSERT INTO studentregistration(name,fatherName,motherName,phone,age,gender,address,class,standard,email) Values('" + name + "','" + fatherName + "','" + motherName + "','" + phone + "','" + age + "','" + gender + "','" + address + "','" + classNo + "','" + standard + "','" + email + "')", function (error, results, fields) {
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