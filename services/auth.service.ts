let userModel = require('../models/User');
let authServiceCreateError : any = require('http-errors');
let jwt = require('../utilities/jwt');
let bcrypt = require('bcryptjs');

class userService {

    static async register(data : any) {

        let { phone } = data;

        let check = await userModel.findOne({ phone });

        if(check) {
            throw authServiceCreateError.Conflict('User with this phone number already exist');
        }
    }
}

module.exports = userService