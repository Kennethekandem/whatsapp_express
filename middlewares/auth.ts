let middlewareJwt = require('../utils/jwt')
let authMiddleWareCreateError = require('http-errors')

const auth = async (req : any, res : any, next : any) => {

    if (!req.headers.authorization) {
        return next(authMiddleWareCreateError.Unauthorized('Access token is required'))
    }

    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return next(authMiddleWareCreateError.Unauthorized())
    }

    await jwt.verifyAccessToken(token).then((user : any) => {
        req.user = user
        next()
    }).catch ((e : any) => {
        next(authMiddleWareCreateError.Unauthorized(e.message))
    })

}

module.exports = auth;