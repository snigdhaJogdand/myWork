var request = require("request");
module.exports.nsodevices = function (req, res) {
var options = { method: 'POST',
  url: 'http://192.168.0.111:8080/jsonrpc',
  headers: 
   { 
    'Cookie': 'sessionid_8080=sesswLGP8Or0kGjeoPckk61kWQ==',
    'content-type': 'application/json' 
  },
  body: 
   { jsonrpc: '2.0',
     id: 8,
     method: 'query',
     params: 
      { th: 1,
        context_node: '/ncs:devices',
        xpath_expr: 'device',
        selection: 
         [ 'name',
           'address',
           'port',
           'description',
           'authgroup',
           'state/oper-state',
           'state/admin-state',
           'platform/name',
           'platform/version' ],
        chunk_size: 20,
        initial_offset: 1,
        result_as: 'string' } },
  json: true };

request(options, function (error, response, body) {
  if (error) 
  {
    console.log("the error is "+error);
  }
  else
  {
    res.send(response.body);
    console.log("the result is : ");
     console.log(body);
  }
});
}