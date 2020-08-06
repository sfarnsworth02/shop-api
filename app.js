const express = require('express');
const argon2 = require('argon2');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;
const config = require('./config');
const db = require('./database');

const app = express();
db();

app.use(cors());
app.use(express.json());

const requestLogger = (req, res, next) =>
{
    const now = new Date();
    console.log(`${now} ::> Incoming request to ${req.originalUrl}`)
    next();
}

// TODO: import DAO's here

const factory = require('./api/router');
// TODO: use the factory function with the DAO's here
// app.use('/', factory())

app.get('/', (req, res)=> { res.send('Future Shopping Site')})

app.listen(port || 3050, (err)=>
{
    if (err)
    {
        console.log(`Error listening on port ${port}`)
    }
    console.log(`App is listening on port ${port}`)
})