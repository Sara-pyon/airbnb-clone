const express = require('express');
require('express-async-errors');
const cors = require('cors');
const setCorsHeader = require('./middleware/setCorsHeader')
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const user = require('./Routes/user');

const db = config.get('db');
mongoose.connect(db)
        .then(() => console.log(`Connected to ${db}`))
        .catch((e) => console.error('Can not connect to databese', e));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(setCorsHeader);
app.use(express.json());
app.use('/api/users', user);




let port;

if(process.env.NODE_ENV !== 'test'){
    port = process.env.PORT || 3000;
};

app.listen(port, () => console.log(`Listening on port ${port}...`))