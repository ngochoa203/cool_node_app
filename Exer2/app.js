const { Pool } = require("pg");

const pool = new Pool({
    user: "codeforgeek",
    host: "localhost",
    database: "users",
    password: "somepassword",
    port: 5432,
});

async function createTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS profile (
            ID SERIAL PRIMARY KEY,
            name VARCHAR(30),
            email VARCHAR(30)
        );
    `;

    try {
        await pool.query(createTableQuery);
        console.log("Table 'profile' is ready!");
    } catch (error) {
        console.error("Error creating table:", error);
    }
}

async function addUser(name, email) {
    const insertQuery = "INSERT INTO profile (name, email) VALUES ($1, $2) RETURNING *";

    try {
        const result = await pool.query(insertQuery, [name, email]);
        console.log("User added:", result.rows[0]);
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

async function getUsers() {
    const selectQuery = "SELECT * FROM profile ORDER BY id ASC";

    try {
        const result = await pool.query(selectQuery);
        console.log("List of Users:");
        console.table(result.rows);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

(async () => {
    await createTable();
    await getUsers();
})();
