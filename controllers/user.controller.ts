let user = require('../services/auth.service');
let userControllerError = require('http-errors');
let cloud = require('../utilities/cloudinary');

class userController {

    static register = async (req : any, res : any, next : any) => {
        try {
            

        } catch (error) {
            next(userControllerError(error.statusCode, error.message));
        }
    }
}

module.exports = userController;