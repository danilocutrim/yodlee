const request = require('request');
const token = require('../request_tokens/tokens')

module.exports = function(app){
    var resposta;
    var bearer = 'Bearer';
    var tkn = `${bearer} ${String(token.requestUserToken())}`;
    app.get('/accounts', function(req,res){
        var options = { method: 'GET',
        url: 'https://sandbox.api.yodlee.com/ysl/accounts',
        headers:
            { 'Postman-Token': '8de7960b-5882-4721-b42a-ae355d04354d',
                'cache-control': 'no-cache',
                Authorization: tkn,
                'Api-version': '1.1',
                'Content-Type': 'application/json' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

                console.log('Accounts request');
                console.log(tkn)
                resposta = body;
        });
        res.send(resposta);
    })
}