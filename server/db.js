const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "root",
    localhost: "localhost",
    port: 5432,
    database: "zxc"
})

module.exports = pool
