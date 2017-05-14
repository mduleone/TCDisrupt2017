const Router = require('express').Router;

const app = new Router();

app.get('/healthz', (req, res) => {
    return res.status(200).json({'status': 'ok'});
});

app.get('/', (req, res) => {
    return res.status(200).json({'hello': 'world'});
});

module.exports = app;
