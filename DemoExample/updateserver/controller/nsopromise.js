var rp = require('request-promise');

module.exports.nsopro = function (req, res) 
{
    var options =
        {
            method: 'POST',
            uri: 'http://192.168.0.111:8080/jsonrpc',
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
            json: true,
            resolveWithFullResponse: true
        };

    let cookie = '';
    rp(options) 
        .then((response) => 
        {
            if (response.headers['set-cookie'] !== undefined) 
            {
                match = /sessionid_8080=(.*?); /.exec(response.headers['set-cookie']);
                if (match !== null) 
                {
                    cookie = `sessionid_8080=${match[1]}`;
                }
                if (cookie) 
                {
                    return rp(
                        {
                        method: 'POST',
                        uri: 'http://192.168.0.111:8080/jsonrpc',
                        headers:
                            {
                                'Cookie': cookie,
                                'Content-Type': 'application/json'
                            },
                        body:
                            {
                                jsonrpc: '2.0',
                                id: 3,
                                method: 'new_trans',
                                params: 
                                        {
                                            db: 'running',
                                            mode: 'read'
                                        }
                            },
                        json: true,
                        resolveWithFullResponse: true
                    });
                }
            }
            return new Promise((resolve, reject) => 
            {
                reject({ error: 'Cookie not found' });
            });
        })
        .then((response) => 
        {
            try {
                return rp(
                    {
                    method: 'POST',
                    uri: 'http://192.168.0.111:8080/jsonrpc',
                    headers:
                        {
                            'Cookie': cookie,
                            'content-type': 'application/json'
                        },
                    body:
                        {
                            jsonrpc: '2.0',
                            id: 8,
                            method: 'query',
                            params:
                                {
                                    th: response.body.result.th,
                                    context_node: '/ncs:devices',
                                    xpath_expr: 'device',
                                    selection:
                                        [   
                                            'name',
                                            'address',
                                            'port',
                                            'description',
                                            'authgroup',
                                            'state/oper-state',
                                            'state/admin-state',
                                            'platform/name',
                                            'platform/version'
                                        ],
                                    chunk_size: 20,
                                    initial_offset: 1,
                                    result_as: 'string'
                                }
                        },
                    json: true,
                    resolveWithFullResponse: true
                });
            } catch (e) 
            {
                return new Promise((resolve, reject) => 
                {
                    reject({ error: e });
                });
            }
        })
        .then((response) => 
        {
            try 
            {
               res.json(
                {
                   status:true,
                   data:response.body.result
               });              
                //res.send(response.body.result);
                console.log(response.body.result);
            } catch (e) 
            {
                res.send({error : 'Device not found'});
            }
            rp(
                {
                method: 'POST',
                uri: 'http://192.168.0.111:8080/jsonrpc',
                headers:
                    {
                        'Cookie': cookie,
                        'content-type': 'application/json'
                    },
                body: 
                {
                    jsonrpc: '2.0',
                    id: 18,
                    method: 'logout'
                },
                json: true
            })
                .then((body) => 
                {
                    console.log('Logout done !');

                })
                .catch((error) => 
                {
                    console.log('Logout failed !');
                });
        })
        .catch((error) => 
        {
            console.log("the error is :" + error);
            res.send(error);
        });
}