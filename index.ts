'use strict';

let express = require('express');
const app = express();

require('dotenv').config();
require('./connectors/mongodb');
let bodyParser = require('body-parser');
let route = require('./routes');
let multer = require('multer');
let cors = require('cors');

/*
    Body parser for get items from form body
*/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// multer for getting files from form
app.use(multer().array())

// for cross-origin resource sharing
app.use(cors())

// Entry route for APIs
app.use('/', route);

const port = process.env.PORT;
app.listen(port);