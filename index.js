'use strict';

const app = require('./config/server');
const token = require('./request_tokens/tokens');

const rotaProviders = require('./routes/providers')(app);
const rotaAccounts = require('./routes/accounts')(app);
const rotaTransactions = require('./routes/get_transactions')(app);
const rotaTransactionsCategories = require('./routes/get_tran_cat')(app);

const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST);
console.log(`Rodando em  http://${HOST}:${PORT}`);