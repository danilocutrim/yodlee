'use strict';

const app = require('./config/server');
const token = require('./request_tokens/tokens');

const rotaProviders = require('./routes/providers')(app);
const rotaAccounts = require('./routes/accounts')(app);

app.listen(5000, function(){
    console.log('Servidor rodando na porta 5000')
})