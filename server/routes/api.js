const Router = require('express').Router;
const db = require('../db');

const app = new Router();

app.get('/:userId', (req, res) => {
    // console.log(db);
    // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
    //
    // console.log(req.params.userId);
    // access query params at req.params.PARAM
    return res.status(200).json({'status': 'ok'});
});

module.exports = app;
