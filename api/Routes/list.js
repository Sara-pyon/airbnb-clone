const express = require('express');
const auth = require('../middleware/auth');
const listAuth = require('../middleware/listAuth');
const listInfo = require('../utilities/listInfo');
const _ = require('lodash');
const { List, validateList } = require('../models/list');
const validator = require('../middleware/validator');
const { User } = require('../models/user');
const { ListIcon } = require('../models/listIcon');
const router = express.Router();

router.get('/', async(req, res) => {
    const lists = await List.find().sort('name');
    res.send(lists);
});

router.post('/', [auth, validator(validateList)], async(req, res) => {
    const host = await User.findById(req.user._id);
    if(!host) res.status(404).send('The user with the given Id is not found');

    const listIcon = await ListIcon.findById(req.body.listIconId);
    if(!listIcon) res.status(404).send('The listIcon with the given Id is not found');

    let list = await new List(listInfo(req));
    list.host = {
        first_name: host.first_name,
        last_name: host.last_name,
        email: host.email
    };
    list.listIcon = {
        title: listIcon.title,
        icon: listIcon.icon
    };

    await list.save();
    res.send(list);
});

router.put('/:id', [auth,listAuth, validator(validateList)], async(req, res) => {
    const list = await List.findByIdAndUpdate(req.params.id, listInfo(req) ,{new: true});
    if(!list) return res.status(404).send("The list with the given Id is not found");
    res.send(list);
})

router.delete('/:id', [auth, listAuth], async(req, res) => {
    const list = await List.findByIdAndDelete(req.params.id);
    if(!list) return res.status(404).send("The list with the given Id is not found");
    res.send(list);
});

router.get('/:id', async(req, res) => {
    const list = await List.findById(req.params.id);
    if(!list) return res.status(404).send("The list with the given Id is not found");
    res.send(list);
});

module.exports = router;