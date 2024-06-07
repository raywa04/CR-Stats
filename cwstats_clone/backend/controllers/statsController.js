
const Clan = require('../models/clan');

exports.getLeaderboard = async (req, res) => {
  try {
    const clans = await Clan.find().sort({ score: -1 }).limit(10);
    res.json(clans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
