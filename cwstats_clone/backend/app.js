
const express = require('express');
const mongoose = require('mongoose');
const statsRoutes = require('./routes/stats');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/cwstats', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/stats', statsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
