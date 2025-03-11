const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin : ['https://kvnbanunu.github.io'],
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.json('express test');
});

app.get('/json', (req, res) => {
    res.json({output: 'Some json'});
});

app.post('/json', (req, res) => {
    const body = req.body;
    console.log(`Received post /json body: ${'' + body}`);
    res.json(body);
});

app.get('/cors', cors(corsOptions), (req, res) => {
    res.json('cors test');
});

app.post('/p', (req, res) => {
    res.json('post test');
});

app.listen(6969);
