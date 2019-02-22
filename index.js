'use strict';

const app = require('./config/server');
const token = require('./request_tokens/tokens');

const rotaProviders = require('./routes/providers')(app);
const rotaAccounts = require('./routes/accounts')(app);
const accounts2 = require('./routes/accounts2')(app);

app.listen(5000, function(){
    console.log('Servidor rodando na porta 5000')
})