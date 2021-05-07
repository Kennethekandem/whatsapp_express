'use strict';

const express = require('express');
const app = express();

require('dotenv').config();
require('./connectors/mongodb');
const route : any = require('./routes');

app.use('/', route);

const port = process.env.PORT;
app.listen(port);