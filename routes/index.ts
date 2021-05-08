const routes : any = require('express').Router();
let auth = require('./auth');
let routerCreateError = require('http-errors');

routes.all('/', (req : any, res : any) => {

    res.status(200).json({
        status: true,
        message: "EXPRESS API v1.0"
    })
    
})

routes.use('/auth', auth);



routes.use( async (req : any, res : any, next : any) => {
    next(routerCreateError.NotFound('Route not Found'))
})

routes.use( (err : any, req : any, res : any, next : any) => {
    res.status(err.status || 500).json({
        status: false,
        message: err.message
    })
})

module.exports = routes;