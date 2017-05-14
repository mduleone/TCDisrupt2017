const Router = require('express').Router;

function receiveDb(app) {
    const routes = new Router();

    routes.get('/testSend', (req, res) => {
        app.nexmo.message.sendSms(
            '12035338311', '18565773772', 'hello from nexmo, bitches.',
            (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    console.dir(`Sent 'hello from nexmo, bitches.'`);
                    console.dir(responseData);
                }
            }
        );
    });

    function handleNexmo(params, res) {
        if (!params.to || !params.msisdn) {
            console.log('This is not a valid inbound SMS message!');
        } else {
            console.log('Success');
            let incomingData = {
                messageId: params.messageId,
                from: params.msisdn,
                text: params.text,
                type: params.type,
                timestamp: params['message-timestamp']
            };
            res.send(incomingData);
        }
        res.status(200).end();
    }

    routes.post('/receive', (req, res) => {
        handleNexmo(req.body, res);
    });

    return routes
}


module.exports = receiveDb;