const express = require('express');
const controller = require('../server/controller');
const massive = require('massive');
require('dotenv').config();

const app = express();

const { CONNECTION_STRING } = process.env;

const port = 4000;
app.listen(port, () => console.log(`server is listening on port ${port}`));