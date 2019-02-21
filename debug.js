const token = require('./request_tokens/tokens');

var bearer = 'Bearer';
var tkn = `'${bearer} ${String(token.requestUserToken())}'`;

console.log(tkn);