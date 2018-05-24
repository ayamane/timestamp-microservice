'use strict';

require('./config/config');

const path = require('path');
const http = require('http');
const express = require('express');
const moment = require('moment');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;

var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));

app.get('/:time', (req, res) => {
  var time = req.params.time;
  var naturalFormat = 'MMMM D, YYYY';

  var unixTime = '';
  var naturalTime = '';
  var validUnix = moment(time, 'x').isValid();
  var validNatural = moment(time).isValid();

  if (validUnix === false && validNatural === false) {
    return res.status(404).send({
      unix: null,
      natural: null
    });
  }
  if (validUnix) {
    unixTime = time,
    naturalTime = moment(time, 'x').format('MMMM D, YYYY');
  }
  if (validNatural) {
    unixTime = moment(time).format('x');
    naturalTime = moment(time).format('MMMM D, YYYY');
  }

  res.send({
    unix: unixTime,
    natural: naturalTime
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
