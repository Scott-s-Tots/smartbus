const mongoose = require('mongoose');

module.exports = mongoose.model('Feedbck', new mongoose.Schema({
  Name: String,
  Phone: String,
  Bus:String,
  Source:String,
  Destination:String,
  Feedback:String
}, { collection : 'feedback' }));