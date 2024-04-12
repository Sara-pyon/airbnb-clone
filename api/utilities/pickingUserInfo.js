const _ = require('lodash');
module.exports = function(user){
     return _.pick(user, ['first_name', 'last_name','email'])};