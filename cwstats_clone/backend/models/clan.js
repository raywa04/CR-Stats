
const mongoose = require('mongoose');

const ClanSchema = new mongoose.Schema({
  name: String,
  score: Number,
  members: Number
});

module.exports = mongoose.model('Clan', ClanSchema);
