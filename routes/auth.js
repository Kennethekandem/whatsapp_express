const routes = require('express').Router();

routes.all('/', (req, res) => {
    res.send("Hello from auth");
})

module.exports = routes