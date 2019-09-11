require('dotenv').config({ path: 'mysql.env' });
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

db.connect(function(err) {
    if (err) throw err;
    console.log('Connected to mysql');
});

exports.getAllRoles = function(callback) {

    db.query('SELECT * FROM Role', function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getAllCapabilities = function(callback) {
	
    db.query('SELECT * FROM Capability', function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getAllBands = function(callback) {
	
    db.query('SELECT * FROM Band', function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

exports.getAllJobFamilies = function(callback) {
	
    db.query('SELECT * FROM Job_Family', function(err, rows) {
        if (err) return callback(err, null);
        callback(err, rows);
    });
};

//Get details for a specific band
exports.getBand = function(band_id, callback) {
    db.query(
        'SELECT band_name, band_competency, band_responsibilities FROM Band WHERE band_id = ?',
        [band_id],
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};

//Get details for a specific role
exports.getRole = function(role_id, callback) {
    db.query(
        'SELECT role_name, role_summary, role_training, role_responsibilities FROM Role WHERE role_id = ?',
        [role_id],
        function(err, rows){
            if(err){
                return callback(err, null);
            }
            callback(null, rows);
        }
    )
};