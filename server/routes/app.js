const Router = require('express').Router;

function scaffoldApp(app) {
    const routes = new Router();

    routes.get('/healthz', (req, res) => {
        return res.status(200).json({'status': 'ok'});
    });

    routes.get('/', (req, res) => {
        return res.status(200).json({'hello': 'world'});
    });

    return routes;
}


module.exports = scaffoldApp;
