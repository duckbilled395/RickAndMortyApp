Stack: PostgreSQL, Express.js, Node.js, React(TypeScript).

Start app: 
1. Connect to PostgreSQL.
2. Create new database 'rickandmorty'
3. Create table using code below, or it will be automatically created
```
CREATE TABLE auth_data (
   id SERIAL PRIMARY KEY,
   email VARCHAR(255),
   password VARCHAR(255)
   );
```
4. Change password for PostgreSQL in file ``server/db.js``
```
const client = new Client({
   host: 'localhost',
   user: 'postgres',
   database: 'rickandmorty',
   password: 'root',    <---------------- here
   port: 5432,
   });
```
```
const pool = new Pool({
    user: "postgres",
    password: "root",   <---------------- here
    localhost: "localhost",
    port: 5432,
    database: "rickandmorty"
})
```
   
5. Run ```npm install``` to update and download all dependencies and modules.
6. Run ```npm start``` to start project and server.