var express = require('express');
var app = express();
var routes = require('./server/routes');
var port = process.env.PORT || 3000

app.use(express.static('public'));
routes(app);

app.listen(port, function () {
  console.log('Example app listening on port', port);
});

