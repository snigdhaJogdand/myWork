var connectionProvider = require('./../conn_details/connect-con');
var moment = require('moment');
module.exports.demoAttendance = function (req, res) {
    date = req.body.date;
    rollNo = req.body.id;
    name = req.body.name;
    classNo = req.body.class;
    standard = req.body.standard;
    status = req.body.status;
    date = req.body.date;
    console.log(date,name,status);
    var connection = connectionProvider.getSqlConnection();
    connection.query(" SELECT * FROM attendance", function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query !!!'
            })
        } else {
            if (results.length >= 0) {
                var a = results.find((element) => {
                    if (moment(element.date).format('YYYY-MM-DD') == date && element.rollNo == rollNo) {
                        console.log("in if: ",element.name);
                        console.log("Can't Update Data!!");
                        res.json({
                            status: false,
                            data: results,
                            message: 'Duplicate data list !!!!'
                        })
                        return true;
                    }
                });
                if (!a) {
                    connection.query("INSERT INTO attendance(rollNo,name,class,standard,status,date) Values('" + rollNo + "','" + name + "','" + classNo + "','" + standard + "','" + status + "','" + date + "')",
                        function (error, results, fields) {
                            if(error){
                                console.log("Error: ",error);
                            }
                            else{
                                console.log("in else: ",results)
                                console.log("Data Inserted!!!");
                                res.json({
                                    status: true,
                                    userList: results,
                                    message: 'successfully get data '
                                })
                            }
                        });
                }
            } 
            else {
                res.json({
                    status: false,
                    data: results,
                    message: 'data not found in the list !!!!'
                })
            }
        }
    });
    // connectionProvider.closeSqlConnection(connection);

}

