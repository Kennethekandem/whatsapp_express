const contact = require('../models/Contact');
const createError = require('http-errors');

class contactService {

    static async all(id) {

        return await contact.findOne(id);
    }
}


module.exports = contactService;