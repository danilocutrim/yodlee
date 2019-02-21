'use strict';

const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('view', './views');

module.exports = app;