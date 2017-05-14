const pg = require('pg');

function scaffoldDatabase(app) {
    const connectionObject = {
        port: app.env.DB_PORT,
        host: app.env.DB_HOST,
        database: app.env.DB_NAME,
        user: app.env.DB_USER,
        password: app.env.DB_PASSWORD
    };

    const dbClient = new pg.Client(connectionObject);
    dbClient.connect();

    app.db = dbClient;
}

module.exports = scaffoldDatabase;