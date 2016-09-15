var routes = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, './index.html'));
    })
};

module.exports = routes;

