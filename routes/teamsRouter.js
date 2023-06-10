const express = require('express');
const Team = require('../models/team');

const TeamRouter = express.Router();

//http://localhost:3000/teams/
TeamRouter.route('/')
.get((req, res, next) => {
    Team.find()
    .then(teams => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(teams);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Team.create(req.body)
    .then(team => {
        console.log('Team Created ', team);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(team)
    }).catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /teams');
})
.delete((req, res, next) => {
    Team.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    }).catch(err => next(err));
})


//http://localhost:3000/teams/id

module.exports = TeamRouter;