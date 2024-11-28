const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port:3306,
    user: 'roto3',
    password: 'admin',
    database: 'fulldb2',
});

module.exports = pool;