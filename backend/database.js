const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "password",
    database: "post_it",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

let createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('Table "users" is created');
    }
});

createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
	    "date" TIMESTAMP NOT NULL,
        "urllink" VARCHAR(200)  
    );`;

// A function to execute the previous query
execute(createTblQuery).then(result => {
    if (result) {
        console.log('Table "posttable" is created');
    }
});

module.exports = pool;