const request = require('request');
const token = require('../request_tokens/tokens')

module.exports = function(app){
    var bearer = 'Bearer';
    var tkn = `${bearer} ${String(token.requestUserToken())}`;
    var options = { method: 'GET',
      url: 'https://sandbox.api.yodlee.com/ysl//transactions/categories',
      headers:
       { 'Postman-Token': '235bdb46-8fa6-4e7e-82f5-3a3e20e96511',
         'cache-control': 'no-cache',
         'Cobrand-Name': '{{cobrandName}}',
         'Api-Version': '1.1',
         Authorization: tkn } };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      else{
          app.get('/transactions_categories',function(req, res){
              obj = JSON.parse(body);
          })
      };
    })
};