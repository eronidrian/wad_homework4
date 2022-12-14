const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgres",
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

/*insertUserQuery = `
    INSERT INTO "users" (email, password) VALUES
      ('admin@ut.ee', 'parool');`;

execute(insertUserQuery).then(result => {
    if (result) {
        console.log('User inserted to "users" ');
    }
});*/

createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,
	    "create_time" DATE NOT NULL DEFAULT CURRENT_DATE,
	    "body" VARCHAR(200) NOT NULL
    );`;

// A function to execute the previous query
execute(createTblQuery).then(result => {
    if (result) {
        console.log('Table "posttable" is created');
        execute(checkDataQuery).then(result2 => {
            if (result2) {
                execute(insertDataQuery).then(result3 => {
                    if (result3) {
                        console.log('Data inserted to "posttable" ');
                    }
                });
            }
        });
    }
});

checkDataQuery = `
    SELECT COUNT(*) FROM "posttable";
    `;

insertDataQuery = `
    INSERT INTO "posttable" (create_time, body) VALUES
      (DATE '2022-10-15', 'Anyone knows in which room is the lab today?'),
      (DATE '2022-11-22', 'Do we need to use Vue.js again?'),
      (DATE '2022-12-02', 'Homework 4 is too much work');`;



module.exports = pool;
