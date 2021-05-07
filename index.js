const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {res.send()})

const port = process.env.PORT;
app.listen(port);