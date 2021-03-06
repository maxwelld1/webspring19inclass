const mysql = require('mysql');
              require('dotenv').load();

const conn = mysql.createPool({
    host: process.env.MYSQL_HOST, // console.log() to see env vars
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});

module.exports = conn;