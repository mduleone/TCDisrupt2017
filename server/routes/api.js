const Router = require('express').Router
const csv = require('csvtojson')
const util = require('util')

function apiRoutes(app) {
    const routes = new Router()

    routes.get('/senate', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client

        console.log("userId: " + req.query.userId)

        const csvFilePath='./server/senate.csv'

        csv()
        .fromFile(csvFilePath)
        .on('end_parsed',(jsonArrObj)=>{
            // console.log("end_parsed: " + util.inspect(jsonArrObj, false, null)); //here is your result json object
            return res.status(200).json(jsonArrObj)
        })
        .on('done',(error)=>{
            console.log('end')
            if (error) {
                return res.status(500).json({"status": "not ok"})
            }
        })
    });

    routes.get('/senate/:repId/reportcard', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        console.log(req.params.userId)
        return res.status(200).json({
            "representative": {
                id: "43661",
                displayName: "Sen. Cory Booker [D-NJ]",
                sortName: "Booker, Cory (Sen.) [D-NJ]",
                party: "Democrat",
                state: "NJ",
                tenureStartDate: "1/6/2015",
                nextElectionDate: "1/3/2021",
                grade: "A+"
            },
            "meta": {
                "totalVotes": 10,
                "numMeaningfulVotes": 5,
                "numAgree": 5,
                "numDisagree": 5
            },
            "issueVoteReactions": [
                {
                    "issue": {
                        "id": "119247",
                        "question": "On the Nomination PN42: Robert Lighthizer, of Florida, to be United States Trade Representative, with the rank of Ambassador",
                        "description": "",
                        "result": "Nomination Confirmed",
                        "externalLink": "https://www.govtrack.us/congress/votes/115-2017/s127",
                        "voteDate": "2017-05-11T13:46:00"
                    },
                    "repVote": {
                        "id": "124dd1e2-c22a-4fbc-a169-2924db123357",
                        "issueId": "119247",
                        "repId": "43661",
                        "vote": "Yay"
                    },
                    "userReation": {
                        "id": "eacf014c-6c63-44f3-96d2-324381fa8d6a",
                        "issueId": "119247",
                        "userId": "5316dbf9-7648-4e32-8b9a-70b014d8b466",
                        "vote": false,
                        "importance": 0
                    }
                }
            ]
        })
    });

    routes.get('/senate/issues', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client

        console.log("userId: " + req.query.userId)

        const csvFilePath='./server/senate_issues.csv'

        csv()
        .fromFile(csvFilePath)
        .on('end_parsed',(jsonArrObj)=>{
            // console.log("end_parsed: " + util.inspect(jsonArrObj, false, null)); //here is your result json object
            return res.status(200).json(jsonArrObj)
        })
        .on('done',(error)=>{
            console.log('end')
            if (error) {
                return res.status(500).json({"status": "not ok"})
            }
        })
    });

    routes.get('/house', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        console.log("userId: " + req.query.userId)

        const csvFilePath='./server/house.csv'

        csv()
        .fromFile(csvFilePath)
        .on('end_parsed',(jsonArrObj)=>{
            // console.log("end_parsed: " + util.inspect(jsonArrObj, false, null)); //here is your result json object
            return res.status(200).json(jsonArrObj)
        })
        .on('done',(error)=>{
            console.log('end')
            if (error) {
                return res.status(500).json({"status": "not ok"})
            }
        })
    });

    routes.get('/house/:repId/reportcard', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        console.log(req.params.userId)
        return res.status(200).json({'status': 'ok'})
    });

    routes.get('/house/issues', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client

        console.log("userId: " + req.query.userId)

        const csvFilePath='./server/house_issues.csv'

        csv()
        .fromFile(csvFilePath)
        .on('end_parsed',(jsonArrObj)=>{
            // console.log("end_parsed: " + util.inspect(jsonArrObj, false, null)); //here is your result json object
            return res.status(200).json(jsonArrObj)
        })
        .on('done',(error)=>{
            console.log('end')
            if (error) {
                return res.status(500).json({"status": "not ok"})
            }
        })
    });

    routes.get('/representatives', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        var chamber = req.query.chamber
        var userId = req.query.userId
        console.log(chamber)
        console.log(userId)
        return res.status(200).json({'status': 'ok'})
    });

    routes.get('/issues', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        var chamber = req.query.chamber
        var userId = req.query.userId
        console.log(chamber)
        console.log(userId)
        return res.status(200).json({'status': 'ok'})
    });

    routes.post('/issue/:issueId/react', (req, res) => {
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        console.log(req.params.issueId)
        return res.status(200).json({
          "id": "f05ba257-15e8-4395-a0ca-a2d7397fc3f0",
          "issueId": req.params.issueId,
          "userId": "c730eea5-ecb5-4284-8150-75588519dea3",
          "vote": true,
          "importance": 0
        })
    });

    return routes
}

module.exports = apiRoutes
