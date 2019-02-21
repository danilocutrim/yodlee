const request = require('request');
const token = require('../request_tokens/tokens')

module.exports = function(app){
    var resposta;
    var bearer = 'Bearer';
    var tkn = `'${bearer} ${String(token.requestUserToken())}'`;
    app.get('/accounts', function(req,res){
        var options = { method: 'GET',
        url: 'https://sandbox.api.yodlee.com/ysl/accounts',
        headers:
            { 'Postman-Token': '8de7960b-5882-4721-b42a-ae355d04354d',
                'cache-control': 'no-cache',
                //Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhNzlhODMxNS0zYzU1LTRjMDktYTJhZC03NzNmN2RiMjU0YzgiLCJpYXQiOjE1NTA3NDc2NTMsImV4cCI6MTU1MDc0ODU1Mywic3ViIjoic2JNZW01YzZkNzJmODUwOTBkNSJ9.CUj7DPS0zNBFYfF6W-CH2fdFv0ER8ST4jHJs66FzS6Mgn1R2XZyE319NnAe1qOv0PE-mNZqzi01fOU-2s2qzNwp2-y-FvBg-4cFdyO9Yuj2FPRy5HbsAXKiBf3pe24oyi8-ME7XFJhgwCcPVg0oevWG1h0YJZ4n63egL4yYp4j5QNf1xW9FvfHNDyPgcd9tOjtezNYhGPBU_zx64zTZoWngXkv-xArTZgUqHEhIcgCYS16qq6jMwZZ_NsZQnjtdsct7B2YRUDN4I5WGi5PekrotkAjY1Fk0b4bMwK2A7RFOkzINZ72GxIW9BqQXOCPX2l-bUnv9Z7OpJpTPDtFe8XA',
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