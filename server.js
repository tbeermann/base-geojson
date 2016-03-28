'use strict';

var express    = require('express');       
var app        = express();                 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        

// get an instance of the express Router
var router = express.Router();              

require('./routes')(router);

// all of our routes will be prefixed with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Magic happens on port ' + port);