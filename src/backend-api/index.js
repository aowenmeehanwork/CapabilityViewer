const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db.js');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

function handleError(err, req, res) {
    if (err.errno === 3819) err.code = "ER_CHECK_CONSTRAINT_VIOLATED";
    console.error(`${err.errno} (${err.code}) : ${err.sqlMessage}`);
    res.status(500).send({
        message: 'Database error. ' + err.sqlMessage
    });
}

app.get('/', function (req, res) {
    res.send({'name': 'Hello World'});
});

app.get('/roles', function (req, res) {
    db.getRoleNames(function (err, rows) {
        if (err) return handleError(err, req, res);
        res.send(rows);
    });
});

app.get('/families', function (req, res) {
    db.getJobFamiliyNames(function (err, rows) {
        if (err) return handleError(err, req, res);
        res.send(rows);
    });
});

app.get('/capabilities', function (req, res) {
    db.getCapabilityNames(function (err, rows) {
        if (err) return handleError(err, req, res);
        res.send(rows);
    });
});

app.get('/bands', function (req, res) {
    db.getBandNames(function (err, rows) {
        if (err) return handleError(err, req, res);
        res.send(rows);
    });
});

app.get('/bands/:id', (req, res) => {
    db.getBand(req.params.id, (err, row) => {
        if (err) return handleError(err);
        res.send(row[0]);
    });
});

app.get('/bands/:id/training', (req, res) => {
    db.getBandTraining(req.params.id, (err, row) => {
        if (err) return handleError(err);
        res.send(row[0]);
    });
});

app.get('/roles/:id', (req, res) => {
    db.getRole(req.params.id, (err, row) => {
        if (err) return handleError(err);
        res.send(row[0]);
    });
});

app.get('/rolesInBand/:id', (req, res) => {
    console.log(req.params.id);
    db.getRolesInBand(req.params.id, (err, row) => {
        if (err) return handleError(err);
        res.send(row);
    });
});

app.get('/capabilities/:id', (req, res) => {
    db.getCapabilityById(req.params.id, (err, row) => {
        if (err) return handleError(err);
        res.send(row[0]);
    });
});

app.get('/capabilitiesByJobFamily/:familyId', (req, res) => {
    db.getCapabilitiesInJobFamily(req.params.familyId, (err, row) => {
        if (err) return handleError(err);
        res.send(row);
    });
});

app.get('/jobFamily/:id', (req, res) => {
    db.getJobFamily(req.params.id, (err, row) => {
        if (err) return handleError(err);
        res.send(row);
    });
});

app.get('/rolesInCapabilityInJobFamily/:familyId/:capabilityId', (req, res) => {
    console.log(req.params);
    db.getRolesInCapabilityInJobFamily(req.params.familyId, req.params.capabilityId, (err, row) => {
        if (err) return handleError(err);
        res.send(row);
    });
});

app.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    db.getUser(req.params.id, (err, row) => {
        if (err) return handleError(err);
        res.send(row);
    });
});

app.listen(8002, function () {
    console.log('Server listening on port 8002');
});
