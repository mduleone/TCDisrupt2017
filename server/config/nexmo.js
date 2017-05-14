const Nexmo = require('nexmo');

function scaffoldNexmo(app) {
    app.nexmo = new Nexmo({
        apiKey: app.env.NEXMO_KEY,
        apiSecret: app.env.NEXMO_SECRET
    });
}

module.exports = scaffoldNexmo;
