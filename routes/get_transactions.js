const request = require('request');
const token = require('../request_tokens/tokens')

module.exports = function(app){
    var bearer = 'Bearer';
    var tkn = `${bearer} ${String(token.requestUserToken())}`;
    var options = { method: 'GET',
      url: 'https://sandbox.api.yodlee.com/ysl/transactions',
      qs: { fromDate: '2013-02-01' },
      headers:
       { 'Postman-Token': 'b0f1d76a-4130-472e-b142-9e357c276d75',
         'cache-control': 'no-cache',
         'Cobrand-Name': '{{cobrandName}}',
         'Api-Version': '1.1',
         Authorization: tkn } };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      else{
          app.get('/transactions', function(req, res){
              obj = JSON.parse(body);
              res.send(obj);
              console.log('Request Transactions')
          })
      };
    })
};