var express = require('express');
var app = express();
var routes = require('./server/routes');

app.use(express.static('public'));
routes(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

