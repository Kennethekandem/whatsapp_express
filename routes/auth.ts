const authRoutes = require('express').Router();

authRoutes.all('/', (req : any, res : any) => {
    res.send("Hello from auth");
})

module.exports = authRoutes