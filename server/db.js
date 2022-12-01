const Pool = require('pg').Pool;

// const pgtools = require('pgtools');
// pgtools.createdb({
//     user: 'postgres',
//     password: 'root',
//     port: 5432,
//     host: 'localhost'
// }, 'rickandmorty', function (err, res) {
//     if (err) {
//         console.error(err);
//         process.exit(-1);
//     }
//     console.log(res);
// });

const pool = new Pool({
    user: "postgres",
    password: "root",
    localhost: "localhost",
    port: 5432,
    database: "rickandmorty"
})

// const createDatabase = async (query) => {
//     console.log(123)
//     try {
//         await pool.connect();
//         await pool.query(query);
//         return true;
//     } catch (error) {
//         console.error(error.stack);
//         return false;
//     } finally {
//         await pool.end();
//     }
// };
//
// const text = `
// CREATE TABLE IF NOT EXISTS auth_data (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255),
//     password VARCHAR(255)
// );`
//
// createDatabase(text).then((result) => {
//     if (result) {
//         console.log('Database created');
//     }
// });

module.exports = pool
