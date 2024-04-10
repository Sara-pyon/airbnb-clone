const express = require('express');
const cors = require('cors')
const app = express();
const config = require('config');
const { default: mongoose } = require('mongoose');

const db = config.get('db');
mongoose.connect(db)
        .then(() => console.log(`Connected to ${db}`))
        .catch((e) => console.error('Can not connect to databese', e));

use.app(express.json());
use.app(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.get('/test', (req, res) => {
    res.send('test ok');
})



let port;

if(process.env.NODE_ENV !== 'test'){
    port = process.env.PORT || 3000;
};

app.listen(port, () => console.log(`Listening on port ${port}...`))