'use strict'

let joi = require('joi');

const Schema= {
    register: joi.object().keys({
        fname: joi.string().required(),
        lname: joi.string().required(),
        username: joi.string().required(),
        email: joi.string().email().lowercase().required(),
    })
}