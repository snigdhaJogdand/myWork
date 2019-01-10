var request = require('request');

module.exports.nsologin = function (req, res) {
    console.log("in the function of nso login");
    var options = {
        method: 'POST',
        url: 'http://192.168.0.111:8080/jsonrpc',
        headers:
            {
                'Content-Type': 'application/json'
            },
          body: 
            { 
              jsonrpc: '2.0',
              id: 1,
              method: 'login',
              params:
                { 
                  user: 'admin', 
                  passwd: 'admin',
                  ack_warning: false 
                } 
            },
           json: true

    };
    function callback(error, response) {
        console.log("In callback !!");
        if (error) 
        {
            console.log("the error is : " + error);
            res.send(error);
        } else 
        {
            console.log(response.headers);
            if(response.headers['set-cookie'] !== undefined) 
            {
                match = /sessionid_8080=(.*?); /.exec(response.headers['set-cookie']);
                if(match !== null) 
                {
                    console.log('Cookie session value :',match[1]);
                }
            }
            res.send(response.body);
       }
    }
    request(options, callback);
}

