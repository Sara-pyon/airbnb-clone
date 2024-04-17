const _ = require('lodash');
module.exports = function(req){
    return _.pick(req.body, 
        ["name", 
        "address", 
        "photos", 
        "description", 
        "extraInfo", 
        "checkIn", 
        "checkOut", 
        "minimum_nights", 
        "maximum_nights", 
        "guests_included", 
        "bedrooms", 
        "beds", 
        "bathrooms", 
        "perks"])
};