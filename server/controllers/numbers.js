var Numbers = require('../models/numbers.js');
var querystring = require('querystring');
var https       = require('https');
var username = 'psy';
var apikey   = 'f9b5445c5ff69131747344fa646e957a4492ec9ee5caac037edd0b59d4474953';

module.exports = {
  add: function(req, res) {
    var newNumber = new Numbers({ number: req.body.phone });
    newNumber.save(function (err, fluffy) {
      if (err) {
        return console.error(err);
      }
      var to = req.body.phone;
      var message = "https://play.google.com/store/apps/details?id=com.ocharge";
      var post_data = querystring.stringify({
        'username' : username,
        'to'       : to,
        'message'  : message
      });
      var post_options = {
        host   : 'api.africastalking.com',
        path   : '/version1/messaging',
        method : 'POST',

        rejectUnauthorized : false,
        requestCert        : true,
        agent              : false,

        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length,
          'Accept': 'application/json',
          'apikey': apikey
        }
      };
      var post_req = https.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          var jsObject   = JSON.parse(chunk);
          var recipients = jsObject.SMSMessageData.Recipients;
          if ( recipients.length > 0 ) {
            for (var i = 0; i < recipients.length; ++i ) {
              var logStr  = 'number=' + recipients[i].number;
              logStr     += ';cost='   + recipients[i].cost;
              logStr     += ';status=' + recipients[i].status; // status is either "Success" or "error message"
              console.log(logStr);
            }
          } else {
            console.log('Error while sending: ' + jsObject.SMSMessageData.Message);
          }
        });
      });

      // Add post parameters to the http request
      post_req.write(post_data);

      post_req.end();
      
      res.sendFile(__dirname, 'public/index.html');
    });
  }
};
