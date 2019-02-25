const request = require('request');
const token = require('../request_tokens/tokens')

module.exports = function(app){
    var bearer = 'Bearer';
    var tkn = `${bearer} ${String(token.requestUserToken())}`;
    var options = { method: 'GET',
        url: 'https://sandbox.api.yodlee.com/ysl/providers?providerId=2852',
        headers:
            {'Postman-Token': 'd59e12ef-e1a2-4819-955e-7617c482a48e',
                'cache-control': 'no-cache',
                Authorization: tkn,
                'Api-version': '1.1',
                'Content-Type': 'application/json' } };

    console.log(tkn);

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        else{
           var obj = Json.parse(body,(error, sucesso)=>{
                if(erro){
                    console.log('error');
                } else {
                    app.get('./providers2', function(req, res){
                        res.send(obj);
                    })
                }
            })
            app.get('/providers2',function(req, res){
                newbody = JSON.parse(body)
                res.send(newbody.provider);
                console.log('Providers request');
            })
        };
    })
};