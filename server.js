const express = require('express');
const app = express();
const server = require('http').Server(app);
const db = require('./db');
const bodyParser = require('body-parser');
const router = require('./network/routes'); 



db('mongodb+srv://admin:123456789*@brokers.ss3ql.mongodb.net/broker');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router(app);

app.use('/broker', express.static('public'))

server.listen(8082, function (){
    console.log('Ejecutando la app en http://localhost:8082');
});