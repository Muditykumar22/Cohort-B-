function errorHandler(err, req, res, next){
    console.log(err);
    const status =err.status || 500;
    res.status(status).json({error: err.message || 'Internal server Error'});
}
module.exports = errorHandler;