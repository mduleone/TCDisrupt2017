const express = require('express');
const scaffoldRoutes = require('./routes');
require('dotenv').config();

const app = express();

const port = (process && process.env && process.env.PORT) ? process.env.PORT : 3001;

scaffoldRoutes(app);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
