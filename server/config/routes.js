const apiRoutes = require('./../routes/api');
const nexmoRoutes = require('./../routes/nexmo');
const appRoutes = require('./../routes/app');

function scaffoldRoutes(app) {
    app.use('/api', apiRoutes(app));
    app.use('/nexmo', nexmoRoutes(app));
    app.use('/', appRoutes(app));
}

module.exports = scaffoldRoutes;
