const authRoutes = require('express').Router();
let validator = require('../middlewares/validator');
let schema = require('../schemas/auth.schema');
let getUser = require('../controllers/user.controller');

authRoutes.post('/register', validator(schema.register), getUser.register);


module.exports = authRoutes