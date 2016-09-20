var numbers = require('../controllers/numbers.js'); 
var routes = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, './index.html'));
    })
  app.route('/api/numbers')
    .post(numbers.add);
  
};

module.exports = routes;

