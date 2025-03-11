const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'https://kvnbanunu.github.io',
    methods: 'GET,HEAD,POST,DELETE,PUT,OPTIONS',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json('express test');
});

app.get('/json', (req, res) => {
    res.json({output: 'Some json'});
});

app.post('/json', (req, res) => {
    console.log(`Received post /json body: ${'' + req.body}`);
    res.json({output: req.body});
});

app.get('/cors', (req, res) => {
    res.json('cors test');
});

app.post('/p', (req, res) => {
    res.json('post test');
});

app.listen(6969);
