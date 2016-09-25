// import the required modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');

// define the destination of the uploaded file
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // retain the original name after upload
  }
});
var upload = multer({ storage: storage });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


// load the ombassador page
app.get('/', function(req, res){
  res.sendFile(__dirname + './ombassador.html');
});

// create upload route
 app.post('/upload', upload.single('resume'), function(req, res) {
    if(req.file){
        res.redirect('/');
        // return "Upload successful";
    }
    return "Missing file!";
    });