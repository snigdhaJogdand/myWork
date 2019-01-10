var request = require("request");
module.exports.nsoth = function (req, res) {
    var options = {
        method: 'POST',
        url: 'http://192.168.0.111:8080/jsonrpc',
        headers:
            {
                'Cookie': 'sessionid_8080=sesswLGP8Or0kGjeoPckk61kWQ==',
                'Content-Type': 'application/json'
            },
        body:
            {
                jsonrpc: '2.0',
                id: 3,
                method: 'new_trans',
                params: {
                    db: 'running',
                    mode: 'read'
                }
            },
        json: true
    };

    request(options, function (error, response, body) 
    {
        res.set('Code-Auther', 'Snigdha');//setting manual headers
        if (error) 
        {
            res.send(error);
            console.log("the error is " + error);
        }
        else 
        {
            res.send(response.body);
            console.log(body);
        }
        // console.log(body);
    });
}
