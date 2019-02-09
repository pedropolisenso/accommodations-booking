const mongojs = require('mongojs');
const db = mongojs('accommodations');

module.exports = db;