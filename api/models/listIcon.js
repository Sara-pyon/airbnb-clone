const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const listIconSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    icon:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    }
});

const ListIcon = mongoose.model('listIcon', listIconSchema);

function validatelistIcon(listIcon){
    const schema = Joi.object({
        title: Joi.string().min(3).max(50).required(),
        icon: Joi.string().min(5).max(100).required()
    });
    return schema.validate(listIcon);
};

exports.ListIcon = ListIcon;
exports.validatelistIcon = validatelistIcon;
exports.listIconSchema = listIconSchema;