console.log(process.env);
if(!process.env.MONGODB_URI) {
  require('dotenv').config();
}

var express = require('express');
var app = express();
var routes = require('./server/routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to db');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));
routes(app);

app.listen(port, function () {
  console.log('Example app listening on port', port);
});

