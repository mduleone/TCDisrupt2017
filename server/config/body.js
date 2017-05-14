const bodyParser = require('body-parser');

function scaffoldBody(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

module.exports = scaffoldBody;
