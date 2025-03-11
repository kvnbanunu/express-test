const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'https://kvnbanunu.github.io',
    methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
    credentials: true // If you need to allow cookies or authentication headers
};

app.use(cors(corsOptions));

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
