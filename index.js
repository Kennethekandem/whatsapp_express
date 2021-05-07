const express = require('express');
const app = express();

require('dotenv').config();
const routes = require('./routes');

app.use('/', routes);

const port = process.env.PORT;
app.listen(port);