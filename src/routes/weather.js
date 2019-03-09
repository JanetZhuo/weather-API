const express = require('express');
const axios = require('../utils/axios');
const Weather = require('../models/Weather');

const router = express.Router();
const APPID = process.env.APPID;

router.get('/:cc/:city', (req, res) => {
    const {cc, city} = req.params;

    Weather.getData(city, cc)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => console.log(err));
})

module.exports = router;