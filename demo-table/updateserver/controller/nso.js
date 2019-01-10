var request = require('request');

module.exports.nsoreq = function (req, res) {
  console.log("In function of nso !!");
  var options = {
    method: 'GET',
    url: 'https://www.google.com'
  };

  function callback(error, response, body) {
    console.log("In callback !!");
    if (error) {
      console.log("the error is : " + error);
      res.send(error);
    } else {
      res.send(body);
    }
  }
  request(options, callback);
}