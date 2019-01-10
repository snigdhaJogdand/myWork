var connectionProvider = require('./../conn_details/connect-con');
var _ = require('lodash');
module.exports.filterStudent = function (req, res) {
  var a = [];
  var b = [];
  var user = req.body;
  for (elements in user) {
    if (elements === 'className') {
      user[elements].forEach(element => {
        if (element.selected) {
          a.push('class = ' + element.id);
        }
      });
    }
    else if (elements === 'standard') {
      user[elements].forEach(element => {
        if (element.selected) {
          b.push(element.id);
        }
      });
    }
  }
  var sql = " SELECT * FROM studentregistration WHERE " + _.join(a, " OR ");
  var connection = connectionProvider.getSqlConnection();
  connection.query(sql, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query !!!' + error
      })
    } else {
      if (results.length > 0) {
        var arr = [];
        results.forEach((ele, index) => {
          b.forEach(e => {
            if (ele.standard == e) {
              arr.push(ele);
            }
          })
        });
        res.json({
          status: true,
          data: arr,
          message: 'successfully authenticated' + '<br>' + arr
        })
      } else {
        res.json({
          status: false,
          data: results,
          message: 'data not found'
        })
      }
    }
  });
  connectionProvider.closeSqlConnection(connection);
}