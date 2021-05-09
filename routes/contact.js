const router = require('express').Router();
const contact = require('../controllers/contact.controller');

router.get('/:id', contact.all);

module.exports = router;