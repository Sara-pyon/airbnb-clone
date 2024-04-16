module.exports = function(req, res, next){
    req.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    req.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    req.header('Access-Control-Allow-Credentials', true);
    next();
}