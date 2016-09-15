var mongoose = require('mongoose');

var numbersSchema = mongoose.Schema({
  number: String
});

module.exports = mongoose.model('Numbers', numbersSchema);

