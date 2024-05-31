const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  category: String,
  value: Number,
});

module.exports = mongoose.model('Data', DataSchema);
