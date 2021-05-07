'use strict';

let express = require('express');
const app = express();

require('dotenv').config();
require('./connectors/mongodb');
let route : any = require('./routes');

app.use('/', route);

const port = process.env.PORT;
app.listen(port);