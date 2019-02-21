const request = require('request');
const token = require('../request_tokens/tokens')

module.exports = function(app){
    var resposta ;
    var bearer = 'Bearer';
    var tkn = `'${bearer} ${String(token.requestUserToken())}'`;
    app.get('/providers',function(req, res){
        var options = { method: 'GET',
        url: 'https://sandbox.api.yodlee.com/ysl/providers',
        headers:
            { 'Postman-Token': 'd59e12ef-e1a2-4819-955e-7617c482a48e',
              'cache-control': 'no-cache',
               //Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhNzlhODMxNS0zYzU1LTRjMDktYTJhZC03NzNmN2RiMjU0YzgiLCJpYXQiOjE1NTA3NDczMzgsImV4cCI6MTU1MDc0ODIzOH0.G5Q5I0EeYXcT-h9D8XTAD91yqpT15Y91eJ3_4S9tIhSkzfWGQrmohkjH8l3XxiQn4Z1ZDVwjcTxT6_eBhbUuZD352h8D_R7fO25MeLPKQTHec-R5N7Q-MM7cpu7zKX9-OT-T3t9XdDzDDi_kGpt-eha1NqdpCAuf12L26MuChoo2efYKwDBG_TTLTctd5jLzNEfIwGRYb8Xcw0_wfKUe1Our0dTJYPEHO3OsMRBifNbbWmtGvMCypj1P-gyQ4GVZjBgTkY4DdCgcmFar11HWuDF4qV7j7PdFLKIRCgmRCafhlJJgBfG8loaLeHY1FX_IHk2i8hoaqvO9kPdVY9e91w',
              Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhNzlhODMxNS0zYzU1LTRjMDktYTJhZC03NzNmN2RiMjU0YzgiLCJpYXQiOjE1NTA3NTc0OTAsImV4cCI6MTU1MDc1ODM5MCwic3ViIjoic2JNZW01YzZkNzJmODUwOTBkNSJ9.XgzvZIDBY91tN1pblnMe6uI9DkLWr41Zqg823Y1yYW5tJCgyafwZ-NwEujbOxl40ODHX6LQfaT69F3SGu9BIQErQ7X697Hh1VylsPlx4hflBe30l-A6xmM_CRp4MPyM18JkLCKXinzsr9F6mbGtM-18LhLNIQwlCF4P4qAHpDGP3dHGhP-P9_zvQ0N_H7xD44akjd39XffiCzPHwNys9xok9eFozgJOYRmK-WxZRY4Px9zQg1b6WTBVk8NKRN71KFmv0UgXirCBk-wBnpQMVOOme-htPKg1tJ0E0OxDBW_ifKkgGglJknk9b35Do268rUvdNmmcKnldZhDSBsa3gig',
              'Api-version': '1.1',
              'Content-Type': 'application/json' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            resposta = body
            console.log('Providers request');
            console.log(tkn);
        });
        res.send(resposta)
    })

}