const express = require('express');
const scaffoldRoutes = require('./config/routes');
const scaffoldBody = require('./config/body');
const scaffoldNexmo = require('./config/nexmo');
const scaffoldEnv = require('./config/env');
const scaffoldDatabase = require('./config/database');

const app = express();

scaffoldEnv(app);
scaffoldBody(app);
scaffoldNexmo(app);
scaffoldDatabase(app);
scaffoldRoutes(app);

const port = app.env.PORT ? app.env.PORT : 3001;

app.listen(port, () => console.log(`Server listening on port: ${port}`));
