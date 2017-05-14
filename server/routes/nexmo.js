const PubNub = require('pubnub');
const Router = require('express').Router;
const fetch = require('isomorphic-fetch');

function nexmoRoutes(app) {
    const routes = new Router();

    routes.get('/test', (req, res) => {
        app.nexmo.message.sendSms(
            '12035338311', '18565773772', 'hello from nexmo, bitches.',
            (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    console.dir(responseData);
                    res.end();
                }
            }
        );
    });

    routes.get('/send-vote', (req, res) => {

        const issue = {
            "category": "nomination",
            "category_label": "Nomination",
            "chamber": "senate",
            "chamber_label": "Senate",
            "congress": 115,
            "created": "2017-05-11T13:46:00",
            "id": 119247,
            "link": "https://www.govtrack.us/congress/votes/115-2017/s127",
            "margin": 0.708333,
            "missing_data": false,
            "number": 127,
            "options": [
            {
                "id": 459885,
                "key": "+",
                "value": "Yea",
                "vote": 119247
            },
            {
                "id": 459886,
                "key": "-",
                "value": "Nay",
                "vote": 119247
            },
            {
                "id": 459887,
                "key": "P",
                "value": "Present",
                "vote": 119247
            },
            {
                "id": 459888,
                "key": "0",
                "value": "Not Voting",
                "vote": 119247
            }
        ],
            "percent_plus": 0.82,
            "question": "On the Nomination PN42: Robert Lighthizer, of Florida, to be United States Trade Representative, with the rank of Ambassador",
            "question_details": null,
            "related_amendment": null,
            "related_bill": null,
            "required": "1/2",
            "result": "Nomination Confirmed",
            "session": "2017",
            "source": "senate",
            "source_label": "senate.gov",
            "total_minus": 14,
            "total_other": 4,
            "total_plus": 82,
            "vote_type": "On the Nomination"
        };

        const message = `The ${issue.chamber_label} voted on a${['a', 'e', 'i', 'o', 'u'].includes(issue.category_label.slice(0, 1).toLowerCase()) ? 'n' : ''} ${issue.category_label} issue!

On the question of:
${issue.question}

The ${issue.chamber_label} voted: ${issue.result}

How would you have voted?

Reply 'Y' for ${issue.options.find(el => el.key === '+').value}, 'N' for ${issue.options.find(el => el.key === '-').value}`;

        app.nexmo.message.sendSms(
            '12035338311', app.env.DEMO_PHONE_NUMBER, message,
            (err, responseData) => {
                if (err) {
                    console.log(err);
                } else {
                    //console.dir(`Sent '${message}'`);
                    //console.dir(responseData);
                    res.end();
                }
            }
        );
    });

    function getZipCode(zipcode, fromNumber, app) {
        pubnub = new PubNub({
            publishKey : app.env.PUB_NUB_PUB_KEY,
            subscribeKey : app.env.PUB_NUM_SUB_KEY
        });

        function publishGetCityStateFromZip(zipcode) {
            var publishConfig = {
                channel : "get-city-state",
                message : {
                    text: `${zipcode}`
                }
            };

            pubnub.publish(publishConfig, function(status, response) {
                console.log(status, response);
            })
        }

        pubnub.addListener({
            status: function(statusEvent) {
                if (statusEvent.category === "PNConnectedCategory") {
                    publishGetCityStateFromZip(zipcode);
                }
            },
            message: function(resp) {
                const state = resp.message.geocode.candidates[0].attributes.Region;
                const city = resp.message.geocode.candidates[0].attributes.City;
                const long = resp.message.geocode.candidates[0].location.x;
                const lat = resp.message.geocode.candidates[0].location.y;

                const fetchUrl = `https://congress.api.sunlightfoundation.com/legislators/locate?apikey=${app.env.PRO_PUBLICA_API_KEY}&latitude=${lat}&longitude=${long}&callback=?`;
                //console.log(fetchUrl);

                fetch(fetchUrl, {method: 'GET'})
                    .then(data => data.json())
                    .then(response => {
                        //const reps = response.results.map((rep, i) => `${i === response.results.length - 1 ? 'and ' : ''}${rep.chamber === 'house' ? 'Rep.' : 'Sen.'} ${rep.first_name} ${rep.last_name}`).join(', ');
                        //console.log(reps);

                        const reps = response.results.map((rep, i) => `${rep.chamber === 'house' ? 'Rep' : 'Sen'} ${rep.first_name} ${rep.last_name}`).join('\n  • ');

                        app.nexmo.message.sendSms(
                            '12035338311', fromNumber, //'447380261953',
                            `Trump The Pigs!\n\nPigs! What are they good for?\nNothing!\n\nWe heard from PubNub, who heard from Esri that you live in:\n\n${city}, ${state}.\n\nYour DC Reps:\n  • ${reps}\n\nWe'll keep an eye on the swine, and check in with you when votes happen.\n\nOf the people, by the people, FOR THE PEOPLE!`,
                            {type: 'unicode'},
                            (err, responseData) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    //console.dir(responseData);
                                }
                            }
                        );
                    });

            },
            presence: function(presenceEvent) {
                // handle presence
            }
        });

        //console.log("Subscribing..");
        pubnub.subscribe({
            channels: ['get-city-state']
        });
    }

    function handleNexmo(params, res) {
        if (!params.to || !params.msisdn) {
            console.log('This is not a valid inbound SMS message!');
        } else {
            //console.log('Success');
            if (params.text.length === 5 && !Number.isNaN(Number(params.text))) {
                getZipCode(params.text, params.msisdn, app);
            }
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

module.exports = nexmoRoutes;
