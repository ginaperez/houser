const express = require('express');
const controller = require('../server/controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(express.json());

const { CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
});

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET
    })
);

app.post('/allhouses/:id', controller.addHouse);
app.delete('/allhouses/:id', conroller.deleteHouse);

const port = 4000;
app.listen(port, () => console.log(`server is listening on port ${port}`));