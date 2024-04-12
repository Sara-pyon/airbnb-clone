const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const router = express();
const Joi = require('joi');
const validator = require('../middleware/validator');
const { User } = require('../models/user');
const auth = require('../middleware/auth');
const pickUserInfo = require('../utilities/pickingUserInfo');

router.post('/', validator(validateAuth) ,async(req, res) => {
    const user = await User.findOne({ email: req.body.email});
    if(!user) return res.status(404).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(404).send('Invalid email or password');

    let options = {
        path:"/",
        sameSite:true,
        maxAge: 1000 * 60 * 60 * 24, // would expire after 24 hours
        httpOnly: false, // The cookie only accessible by the web server
    }

    const token = user.generateAuthToken();
    res.cookie('x-auth-token', token).send(pickUserInfo(user));
});

router.get('/',async(req, res) => {
    let token = req.cookies['x-auth-token'];

    jwt.verify(token, config.get('jwtPrivateKey'), {}, async(err, decoded) => {
        if(err) throw err
        const user = await User.findById(decoded._id);
        res.send(pickUserInfo(user));
    });
});

function validateAuth(user){
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required()
            .email({
                minDomainSegments: 2, 
                tlds: { allow: ['com', 'net'] }
            }).message('Invalid email or password')
            ,
            password:Joi.string().min(8).max(1024)
            .pattern( new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'))
            .message('Invalid email or password')
    });
    return schema.validate(user);
};

module.exports = router;