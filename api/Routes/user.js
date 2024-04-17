const express = require('express');
const auth = require('../middleware/auth');
const validator = require('../middleware/validator');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const {User, validateUser} = require('../models/user');
const router = express.Router();

router.get('/me', auth ,async(req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});

router.post('/', validator(validateUser),async(req,res) => {

    let user = await User.findOne({email: req.body.email});
    if(user) res.status(400).send('User is already registered');

    const session = await User.startSession();
    if(!session){
        return res.status(500).send("Internal Server Error: Unable to start a database session.");
    };
    await session.startTransaction();

    try{
        user = new User(_.pick(req.body, ['first_name', 'last_name', 'email', 'password']));
    
        // hash passsword
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save({session});

        const token = user.generateAuthToken();
        res.cookie('x-auth-token', token).send(_.pick(user, ['first_name', 'last_name', 'email']));

        await session.commitTransaction();
    }catch(er){
        await session.abortTransaction();
        console.log("The transaction was aborted due to an unexpected error : " + er);
    }finally{
        await session.endSession();
    }
    
});

module.exports = router;