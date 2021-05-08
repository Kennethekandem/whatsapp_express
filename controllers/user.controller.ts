let user = require('../services/auth.service');
let userControllerError = require('http-errors');
let cloud = require('../utilities/cloudinary');

class userController {

    static register = async (req : any, res : any, next : any) => {
        try {
            let data = await user.register(req.body);

            res.status(200).json({
                status: true,
                message: 'Account created successfully',
                data
            })

        } catch (error) {
            next(userControllerError(error.statusCode, error.message));
        }
    }
}

module.exports = userController;