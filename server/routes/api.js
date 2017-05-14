const Router = require('express').Router;

function apiRoutes(app) {
    const routes = new Router();

    routes.get('/:userId', (req, res) => {
        // console.log(app.db);
        // app.db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        // console.log(req.params.userId);
        // access query params at req.params.PARAM
        return res.status(200).json({'status': 'ok'});
    });

    return routes;
}

module.exports = apiRoutes;
