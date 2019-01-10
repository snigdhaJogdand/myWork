var request = require("request");
module.exports.nsologout = function (req, res) {
var options = { 
  method: 'POST',
  url: 'http://192.168.0.111:8080/jsonrpc',
  headers: 
  {
    'Cookie': 'sessionid_8080=sesswLGP8Or0kGjeoPckk61kWQ==',
    'content-type': 'application/json' },
  body: { 
     jsonrpc: '2.0',
     id: 18, 
     method: 'logout' 
    },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.send(response.body);
  console.log(body);
});
}