const express = require('express');
require('./config/configDb');

const app = express();

app.use(express.json());



app.listen(3333);