const mongoose = require('mongoose');

module.exports = mongoose.model('Device', new mongoose.Schema({
  City: String,
  Email: Array
}, { collection : 'groupproject' }));