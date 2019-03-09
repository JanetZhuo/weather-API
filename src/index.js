const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => res.send('welcome'));

app.get('/api/weather/:cc/:city', (req, res) => {
    const {cc, city} = req.params;
    axios
        .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=33941f1bbe8bc1e025d87788d95f0c66`
        )
        .then(response => {
            res.send(response.data);
        })
        .catch(err => console.log(err));
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))