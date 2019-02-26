'use strict';

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


module.exports = app;
