const express = require('express');

const app = express();

app.use(function(){
    res.setHeader('Access-Control-Allow-Origin', 'https://kvnbanunu.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // No Content
    }

    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.options('*', cors(corsOptions));

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

app.get('/cors', (req, res) => {
    res.json('cors test');
});

app.post('/p', (req, res) => {
    res.json('post test');
});

app.listen(6969);
