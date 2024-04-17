const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { ListIcon, validatelistIcon} = require('../models/listIcon');
const validator = require('../middleware/validator');
const { List } = require('../models/list');
const router = express.Router();

router.get('/', async(req, res) => {
    const listIcons = await ListIcon.find().sort('title');
    res.send(listIcons);
});

router.post('/', [auth,validator(validatelistIcon)], async(req, res) => {
    const listIcon = new ListIcon({ title: req.body.title, icon: req.body.icon});
    await listIcon.save();
    res.send(listIcon);
});

router.put('/:id', [auth, admin, validator(validatelistIcon)], async(req, res) => {
    const listIcon = await ListIcon.findByIdAndUpdate(req.params, 
        {title: req.body.title, icon: req.body.icon },{new: true});

    if(!listIcon) return res.status(404).send('The listIcon with the given Id is not found');

    res.send(listIcon);
});

router.delete('/:id',[auth, admin] ,async(req, res) => {
    const listIcon = await ListIcon.findByIdAndDelete(req.params.id);

    if(!listIcon) return res.status(404).send('The listIcon with the given Id is not found');

    res.send(listIcon);
});

router.get('/:id', async(req, res) => {
    const listIcon = await List.findById(req.params.id);
    if(!listIcon) return res.status(404).send('The listIcon with the given Id is not found');
    res.send(listIcon);
});

module.exports = router;