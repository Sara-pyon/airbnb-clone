const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  host:{
    type: new mongoose.Schema({
      first_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
      },
      last_name: {
          type: String,
          required: true,
          minlength: 3,
          maxlength: 50
      },
      email:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
  }),
  required: true,
  unique: false
},
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  address: {
    street: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100
    },
    country: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100
    },
    country_code: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 5
    },
  },
  photos: [String],
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 2000
  },
  listIcon:{
    type: new mongoose.Schema({
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
    }),
    required: true
  },
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  minimum_nights : {
    type: Number,
    required: true,
    min: 1,
    max: 7
  },
  maximum_nights : {
    type: Number,
    required: true,
    min: 1,
    max: 365
  },
  guests_included: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  beds: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  bathrooms: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  perks: [String],
});

const List = mongoose.model('Listing', listingSchema);

function validateList(list){
  const schema = Joi.object({
    hostId: Joi.objectId(),
    name: Joi.string().min(5).max(100).required(),
    address: Joi.object({
      street: Joi.string().min(5).max(100).required(),
      country: Joi.string().min(2).max(100).required(),
      country_code: Joi.string().min(1).max(5).required()
    }).required(),
    photos: Joi.array().items(Joi.string()),
    description: Joi.string().min(5).max(2000).required(),
    listIconId: Joi.objectId(),
    extraInfo: Joi.string(),
    checkIn: Joi.number(),
    checkOut: Joi.number(),
    minimum_nights: Joi.number().integer().min(1).max(7).required(),
    maximum_nights: Joi.number().integer().min(1).max(365).required(),
    guests_included: Joi.number().integer().min(1).max(100).required(),
    bedrooms: Joi.number().integer().min(1).max(100).required(),
    beds: Joi.number().integer().min(1).max(100).required(),
    bathrooms: Joi.number().integer().min(1).max(100).required()
  });
  
  return schema.validate(list);
};

exports.List = List;
exports.validateList = validateList;


