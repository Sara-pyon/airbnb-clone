const express = require('express');
const cookieParser = require('cookie-parser');
require('express-async-errors');
const cors = require('cors');
const setCorsHeader = require('./middleware/setCorsHeader')
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const user = require('./Routes/user');
const auth = require('./Routes/auth');
const listIcons = require('./Routes/listIcon');
const list = require('./Routes/list');

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
app.use(cookieParser());
app.use('/api/users', user);
app.use('/api/auth', auth);
app.use('/api/listIcons', listIcons);
app.use('/api/lists', list);

let port;

if(process.env.NODE_ENV !== 'test'){
    port = process.env.PORT || 3000;
};

app.listen(port, () => console.log(`Listening on port ${port}...`))