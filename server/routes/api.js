<<<<<<< HEAD
const Router = require('express').Router
const db = require('../db')
const csv = require('csvtojson')
const util = require('util')

function apiRoutes(app) {
    const routes = new Router();

    app.get('/senate', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
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
            console.log('end');
            if (error) {
                return res.status(500).json({"status": "not ok"})
            }
        })
    });

    app.get('/senate/:repId/reportcard', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        console.log(req.params.userId);
        return res.status(200).json({'status': 'ok'})
    });

    app.get('/senate/issues', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        console.log(req.query.userId);
        return res.status(200).json({'status': 'ok'});
    });

    app.get('/house', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
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
            console.log('end');
            if (error) {
                return res.status(500).json({"status": "not ok"})
            }
        })
    });

    app.get('/house/:repId/reportcard', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        console.log(req.params.userId);
        return res.status(200).json({'status': 'ok'});
    });

    app.get('/senate/issues', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        var chamber = "senate";
        var userId = req.query.userId;
        console.log(chamber);
        console.log(userId);
        return res.status(200).json({'status': 'ok'});
    });

    app.get('/representatives', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        var chamber = req.query.chamber;
        var userId = req.query.userId;
        console.log(chamber);
        console.log(userId);
        return res.status(200).json({'status': 'ok'});
    });

    app.get('/issues', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        var chamber = req.query.chamber;
        var userId = req.query.userId;
        console.log(chamber);
        console.log(userId);
        return res.status(200).json({'status': 'ok'});
    });

    app.post('/issue/:issueId/react', (req, res) => {
        // console.log(db);
        // db is the database instance. Check out the pg docs: https://www.npmjs.com/package/pg
        // Docs for interacting with the `Client` object: https://github.com/brianc/node-postgres/wiki/Client
        //
        console.log(req.params.issueId);
        return res.status(200).json({
          "id": "f05ba257-15e8-4395-a0ca-a2d7397fc3f0",
          "issueId": req.params.issueId,
          "userId": "c730eea5-ecb5-4284-8150-75588519dea3",
          "vote": true,
          "importance": 0
        });
    });

    return routes;
}

module.exports = app;
