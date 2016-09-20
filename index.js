// console.log(process.env);
if(!process.env.MONGODB_URI) {
  require('dotenv').config();
}

var express = require('express');
var app = express();
var routes = require('./server/routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, './uploads');
  },
  filename: function(req, file, callback){
    callback(null, file.fieldname + '_' + Date.now());
  }
});

var upload = multer({ storage : storage}).single('userResume');


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

// uploading resume
app.post('/api/resume', function(req, res){
  upload(req, res, function(err){
    if(err){
      return res.end("Error uploading file");
    }
    res.end("File has been uoploaded successfully");
  })
})

app.listen(port, function () {
  console.log('Example app listening on port', port);
});

