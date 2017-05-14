const express = require('express');
const scaffoldRoutes = require('./routes');
require('dotenv').config();

const app = express();

const port = (process && process.env && process.env.port) ? process.env.port : 3001;

scaffoldRoutes(app);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
