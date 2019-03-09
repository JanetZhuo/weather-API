const express = require('express');
const weatherRouters = require('./routes/weather');

const router = express.Router();

router.get('/', (req, res) => res.send('welcome'));

router.use('/api/weather', weatherRouters);

module.exports = router;