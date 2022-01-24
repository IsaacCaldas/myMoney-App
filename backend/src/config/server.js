/*const port = 3005;*/
const port = process.env.PORT

const bodyParser = require('body-parser');
const express = require('express');
const queryParser = require('express-query-int');
const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(queryParser());

// to accept request of different origins
server.use(allowCors);

server.listen(port, function() {
  console.log(`Backend is running on port ${port}.`);
});

module.exports = server;
