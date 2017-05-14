const Router = require('express').Router;
const db = require('../db');

const app = new Router();

app.get('/', (req, res) => {
    console.log(db);
    return res.status(200).json({'status': 'ok'});
});

module.exports = app;
