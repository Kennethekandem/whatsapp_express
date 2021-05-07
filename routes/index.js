const routes = require('express').Router();
const auth = require('./auth');

routes.all('/', (req, res) => {

    res.status(200).json({
        status: true,
        message: "EXPRESS API v1.0"
    })
    
})

routes.use('/auth', auth);

module.exports = routes;