const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const app = express();

const {CONNECTION_STRING, SESSION_SECRET} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// For npm run build 
// app.use(express.statoc(__dirname + '../build'));

app.use(bodyParser.json());

// Endpoints
app.post(`api/login`, controller.login);
app.post(`api/register`, controller.register);


massive(process.env.CONNECTION_STRING).then(connection => {
    app.set('db', connection);
})

const port = 3010
app.listen(port, ()=>{console.log(`I hear you all the time like 1984 on PORT: ${port}`)});