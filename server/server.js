'use strict';

require('./config/config');

const path = require('path');
const http = require('http');
const express = require('express');
//const _ = require('lodash');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;

var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
