const apiRoutes = require('./routes/api');
const appRoutes = require('./routes/app');

function scaffoldApp(app) {
    app.use('/api', apiRoutes);
    app.use('/', appRoutes);
}

module.exports = scaffoldApp;
