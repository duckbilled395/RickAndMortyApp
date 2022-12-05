const Pool = require('pg').Pool;
const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'rickandmorty',
    password: 'root',
    port: 5432,
});

const pool = new Pool({
    user: "postgres",
    password: "root",
    localhost: "localhost",
    port: 5432,
    database: "rickandmorty"
})

const execute = async (query) => {
    try {
        await client.connect();
        await client.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();
    }
};

const text = `
CREATE TABLE IF NOT EXISTS auth_data (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)
);`

execute(text).then(result => {
    if (result) {
        console.log('Table created');
    }
});

module.exports = pool
