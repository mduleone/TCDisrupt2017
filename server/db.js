const pg = require('pg');
require('dotenv').config();

const connectionObject = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

const dbClient = new pg.Client(connectionObject);
dbClient.connect();

module.exports = dbClient;
