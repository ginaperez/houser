const express = require('express');
const dashboardController = require('./controllers/dashboardController');
const authController = require('./controllers/authController');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(express.static('public'));

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

app.post(`api/auth/register`, authController.register);
app.post(`api/auth/login`, authController.login);
app.get(`/auth/session`, authController.userSession);
app.post(`api/auth/logout`, authController.logout);

app.post('api/properties', dashboardController.addHouse);
app.get(`api/properties`, dashboardController.displayHouses);
app.delete(`api/properties/:id`, dashboardController.deleteHouse);



const port = 4000;
app.listen(port, () => console.log(`server is listening on port ${port}`));