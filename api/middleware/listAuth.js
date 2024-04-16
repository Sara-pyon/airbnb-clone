module.exports = function(req, res, next){
    if(req.user._id === req.hostId) return res.status(403).send("Access denied. Invalid user to editor this list");
    next();
};