const contact = require('../models/Contact');
const createError = require('http-errors');

class contactService {

    static async all(id) {

        return await contact.findOne({id});
    }

    static async add(data) {

        const { user_id } = data;
        const user = await contact.findOne({user_id});

        if(user.length > 0) {
            
        }
    }
}


module.exports = contactService;