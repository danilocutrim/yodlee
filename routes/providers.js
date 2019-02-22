const request = require('request');
const token = require('../request_tokens/tokens')

module.exports = function(app){
    var bearer = 'Bearer';
    var tkn = `${bearer} ${String(token.requestUserToken())}`;
    var options = { method: 'GET',
        url: 'https://sandbox.api.yodlee.com/ysl/providers',
        headers:
            {'Postman-Token': 'd59e12ef-e1a2-4819-955e-7617c482a48e',
                'cache-control': 'no-cache',
                Authorization: tkn,
                'Api-version': '1.1',
                'Content-Type': 'application/json' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        else{
            app.get('/providers',function(req, res){
                res.send(body);
                console.log('Providers request');
            })
        };
    })
};