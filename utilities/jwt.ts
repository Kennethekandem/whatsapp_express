let jsonWebToken = require('jsonwebtoken');
let jwtError = require('http-errors');
require('dotenv').config();

// JWT access token
private :  const accessToken = process.env.JWT_ACCESS_TOKEN;

module.exports = {
    signAccessToken(payload : any) {
        return new Promise ((resolve, reject) => {
            jsonWebToken.sign({ payload }, accessToken, {

            }, (error : any, token : any) => {
                if(error) {
                    reject(jwtError.InternalServerError());
                }
                resolve(token)
            })
        })
    },
    verifyAccessToken(token : string) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, accessToken, (error : any, payload : any) => {
                if(error) {
                    let message = error.name == 'JsonWebTokenError' ? 'Unauthorized' : error.message
                    return reject(jwtError.Unauthorized(message))
                }
                resolve(payload)
            })
        })
    }
}